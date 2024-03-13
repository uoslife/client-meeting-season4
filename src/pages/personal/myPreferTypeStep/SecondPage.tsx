import PageLayout from '~/components/layout/page/PageLayout';
import Paddler from '~/components/layout/Pad';
import Col from '~/components/layout/Col';
import Row from '~/components/layout/Row';
import Text from '~/components/typography/Text';
import RoundButton from '~/components/buttons/roundButton/RoundButton';
import RangeSlider from '~/components/rangeSlider/RangeSlider';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { pageFinishAtom } from '~/store/funnel';
import { personalDataAtoms } from '~/models/personal/data';
import { combinedValidatiesAtoms } from '~/models';
import { ReligionOption, Univ } from '~/models/options';

const SecondPage = () => {
  const [pageState, setPageState] = useAtom(
    personalDataAtoms.personalPreferInfoStep.page2,
  );
  const { drinkRange, religionOptions, smoking, univs } = pageState;

  const onClickReligionButton = (value: ReligionOption) => () =>
    setPageState(prev => ({
      ...prev,
      religionOptions: prev.religionOptions.includes(value)
        ? prev.religionOptions.filter(v => v !== value)
        : [...prev.religionOptions, value],
    }));

  const getReligionButtonStatus = (value: ReligionOption) =>
    religionOptions.includes(value) ? 'active' : 'inactive';

  const onClickUnivButton = (value: Univ) => () =>
    setPageState(prev => ({
      ...prev,
      univs: prev.univs.includes(value)
        ? prev.univs.filter(v => v !== value)
        : [...prev.univs, value],
    }));

  const getUnivButtonStatus = (value: Univ) =>
    univs.includes(value) ? 'active' : 'inactive';

  const pageValidity = useAtomValue(combinedValidatiesAtoms)
    .personalPreferInfoStep.page2;
  const setIsPageFinished = useSetAtom(pageFinishAtom);
  setIsPageFinished(!!pageValidity);

  return (
    <PageLayout.SingleCardBody
      children={
        <Paddler top={36} right={20} bottom={24} left={20}>
          <Row>
            <Col gap={56}>
              <Col gap={28}>
                <Col gap={12} align="center">
                  <Text
                    label={'4. 매칭을 원하는 대학을 선택해 주세요'}
                    color={'Gray500'}
                    typography={'NeoTitleM'}
                    weight={400}
                    size={18}
                  />
                  <Text
                    label={
                      '복수 선택이 가능하며 무관한 경우 모두 선택해 주세요.'
                    }
                    color={'Gray400'}
                    typography={'GoThicBodyS'}
                    weight={400}
                    size={14}
                  />
                </Col>
                <Col gap={8}>
                  <RoundButton
                    status={getUnivButtonStatus('KHU')}
                    label={'경희대학교'}
                    height={56}
                    onClick={onClickUnivButton('KHU')}
                    borderType="primary"
                  />
                  <RoundButton
                    status={getUnivButtonStatus('UOS')}
                    label={'서울시립대학교'}
                    height={56}
                    onClick={onClickUnivButton('UOS')}
                    borderType="primary"
                  />
                  <RoundButton
                    status={getUnivButtonStatus('HUFS')}
                    label={'한국외국어대학교'}
                    height={56}
                    onClick={onClickUnivButton('HUFS')}
                    borderType="primary"
                  />
                </Col>
              </Col>

              <Col gap={28}>
                <Col gap={12} align="center">
                  <Text
                    label={'5. 선호하는 상대의 종교를 선택해 주세요'}
                    color={'Gray500'}
                    typography={'NeoTitleM'}
                    weight={400}
                    size={18}
                  />
                  <Text
                    label={
                      '복수 선택이 가능하며 무관한 경우 모두 선택해 주세요.'
                    }
                    color={'Gray400'}
                    typography={'GoThicBodyS'}
                    weight={400}
                    size={14}
                  />
                </Col>
                <Col gap={12}>
                  <Row gap={12}>
                    <RoundButton
                      status={getReligionButtonStatus('기독교')}
                      onClick={onClickReligionButton('기독교')}
                      label={'기독교'}
                      height={56}
                      borderType="primary"
                    />
                    <RoundButton
                      status={getReligionButtonStatus('천주교')}
                      onClick={onClickReligionButton('천주교')}
                      label={'천주교'}
                      height={56}
                      borderType="primary"
                    />
                  </Row>
                  <Row gap={12}>
                    <RoundButton
                      status={getReligionButtonStatus('불교')}
                      onClick={onClickReligionButton('불교')}
                      label={'불교'}
                      height={56}
                      borderType="primary"
                    />
                    <RoundButton
                      status={getReligionButtonStatus('무교')}
                      onClick={onClickReligionButton('무교')}
                      label={'무교'}
                      height={56}
                      borderType="primary"
                    />
                  </Row>
                  <Row gap={12}>
                    <RoundButton
                      status={getReligionButtonStatus('기타')}
                      onClick={onClickReligionButton('기타')}
                      label={'기타'}
                      height={56}
                      borderType="primary"
                    />
                    <RoundButton
                      status={getReligionButtonStatus('상관 없어요!')}
                      onClick={onClickReligionButton('상관 없어요!')}
                      label={'상관 없어요!'}
                      height={56}
                      borderType="primary"
                    />
                  </Row>
                </Col>
              </Col>
              <Col gap={28}>
                <Col align="center">
                  <Text
                    label={'6. 선호하는 상대의 흡연 여부를'}
                    color={'Gray500'}
                    typography={'NeoTitleM'}
                    weight={400}
                    size={18}
                  />
                  <Text
                    label={'선택해 주세요'}
                    color={'Gray500'}
                    typography={'NeoTitleM'}
                    weight={400}
                    size={18}
                  />
                </Col>
                <Col gap={8}>
                  <RoundButton
                    status={smoking === '흡연' ? 'active' : 'inactive'}
                    label={'흡연'}
                    height={56}
                    onClick={() =>
                      setPageState(prev => ({ ...prev, smoking: '흡연' }))
                    }
                    borderType="primary"
                  />
                  <RoundButton
                    status={smoking === '비흡연' ? 'active' : 'inactive'}
                    label={'비흡연'}
                    height={56}
                    onClick={() =>
                      setPageState(prev => ({
                        ...prev,
                        smoking: '비흡연',
                      }))
                    }
                    borderType="primary"
                  />
                  <RoundButton
                    status={smoking === '상관 없어요!' ? 'active' : 'inactive'}
                    label={'상관 없어요!'}
                    height={56}
                    onClick={() =>
                      setPageState(prev => ({
                        ...prev,
                        smoking: '상관 없어요!',
                      }))
                    }
                    borderType="primary"
                  />
                </Col>
              </Col>

              <Col gap={28}>
                <Col align="center">
                  <Text
                    label={'7. 선호하는 상대의 한 달 기준'}
                    color={'Gray500'}
                    typography={'NeoTitleM'}
                    weight={400}
                    size={18}
                  />
                  <Text
                    label={'음주 횟수를 선택해 주세요'}
                    color={'Gray500'}
                    typography={'NeoTitleM'}
                    weight={400}
                    size={18}
                  />
                </Col>
                <Col gap={32} align="center">
                  <Text
                    label={`${drinkRange[0]} - ${drinkRange[1]} 회`}
                    color={'Primary500'}
                    typography={'LeferiBaseRegular'}
                    weight={700}
                    size={20}
                  />
                  {/* 슬라이더 수정 이후 패딩 값 수정*/}
                  <RangeSlider
                    value={drinkRange}
                    onChange={value =>
                      setPageState(prev => ({ ...prev, drinkRange: value }))
                    }
                    min={0}
                    max={25}
                    markStep={5}
                    step={1}
                    maxMarkPostfix="~"
                  />
                </Col>
              </Col>
            </Col>
          </Row>
        </Paddler>
      }
    />
  );
};

export default SecondPage;
