import PageLayout from '~/components/layout/page/PageLayout';
import Paddler from '~/components/layout/Pad';
import Col from '~/components/layout/Col';
import Row from '~/components/layout/Row';
import Text from '~/components/typography/Text';
import RoundButton from '~/components/buttons/roundButton/RoundButton';
import RangeSlider from '~/components/rangeSlider/RangeSlider';
import useRangeState from '~/hooks/useRangeState';
import { useEffect } from 'react';
import { useAtom, useSetAtom } from 'jotai';
import { personalApplyAtoms } from '~/store/meeting';
import { pageFinishAtom } from '~/store/funnel';
import { useToggleSelect } from '~/hooks/useToggleSelect';

const SecondPage = () => {
  const storedUniversity = localStorage.getItem('personalPrefer_univ');
  const parsedUniversity =
    storedUniversity === null ? [] : JSON.parse(storedUniversity);
  const {
    selectedValues: university,
    select: selectUniversity,
    checkSelectedValues: checkUniversity,
  } = useToggleSelect<string>(3, parsedUniversity);
  const [, setUniversity] = useAtom(personalApplyAtoms.personalPrefer_univ);

  const storedReligion = localStorage.getItem('personalPrefer_religion');
  const parsedReligion =
    storedReligion === null ? [] : JSON.parse(storedReligion);
  const {
    selectedValues: religion,
    select: selectReligion,
    checkSelectedValues: checkReligion,
  } = useToggleSelect<string>(6, parsedReligion);
  const [, setReligion] = useAtom(personalApplyAtoms.personalPrefer_religion);

  const [smoking, setSmoking] = useAtom(
    personalApplyAtoms.personalPrefer_smoking,
  );

  const storedDrink = localStorage.getItem('personalPrefer_drink');
  const parsedDrink = storedDrink === null ? [10, 17] : JSON.parse(storedDrink);
  const { rangeHandler: drinkHandler, rangeValue: drink } =
    useRangeState(parsedDrink);
  const [, setDrink] = useAtom(personalApplyAtoms.personalPrefer_drink);

  const setIsPageFinished = useSetAtom(pageFinishAtom);

  useEffect(() => {
    setUniversity(university);
    setReligion(religion);
    setDrink(drink.map(Number));
    const isAllInputsFilled =
      university.length > 0 && religion.length > 0 && smoking && drink;
    setIsPageFinished(!!isAllInputsFilled);
  }, [university, religion, smoking, drink]);

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
                    status={
                      checkUniversity('경희대학교') ? 'active' : 'inactive'
                    }
                    label={'경희대학교'}
                    height={56}
                    onClick={() => selectUniversity('경희대학교')()}
                    borderType="primary"
                  />
                  <RoundButton
                    status={
                      checkUniversity('서울시립대학교') ? 'active' : 'inactive'
                    }
                    label={'서울시립대학교'}
                    height={56}
                    onClick={() => selectUniversity('서울시립대학교')()}
                    borderType="primary"
                  />
                  <RoundButton
                    status={
                      checkUniversity('한국외국어대학교')
                        ? 'active'
                        : 'inactive'
                    }
                    label={'한국외국어대학교'}
                    height={56}
                    onClick={() => selectUniversity('한국외국어대학교')()}
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
                      status={checkReligion('기독교') ? 'active' : 'inactive'}
                      label={'기독교'}
                      height={56}
                      onClick={() => selectReligion('기독교')()}
                      borderType="primary"
                    />
                    <RoundButton
                      status={checkReligion('천주교') ? 'active' : 'inactive'}
                      label={'천주교'}
                      height={56}
                      onClick={() => selectReligion('천주교')()}
                      borderType="primary"
                    />
                  </Row>
                  <Row gap={12}>
                    <RoundButton
                      status={checkReligion('불교') ? 'active' : 'inactive'}
                      label={'불교'}
                      height={56}
                      onClick={() => selectReligion('불교')()}
                      borderType="primary"
                    />
                    <RoundButton
                      status={checkReligion('무교') ? 'active' : 'inactive'}
                      label={'무교'}
                      height={56}
                      onClick={() => selectReligion('무교')()}
                      borderType="primary"
                    />
                  </Row>
                  <Row gap={12}>
                    <RoundButton
                      status={checkReligion('기타') ? 'active' : 'inactive'}
                      label={'기타'}
                      height={56}
                      onClick={() => selectReligion('기타')()}
                      borderType="primary"
                    />
                    <RoundButton
                      status={
                        checkReligion('상관 없어요!') ? 'active' : 'inactive'
                      }
                      label={'상관 없어요!'}
                      height={56}
                      onClick={() => selectReligion('상관 없어요!')()}
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
                    onClick={() => setSmoking('흡연')}
                    borderType="primary"
                  />
                  <RoundButton
                    status={smoking === '비흡연' ? 'active' : 'inactive'}
                    label={'비흡연'}
                    height={56}
                    onClick={() => setSmoking('비흡연')}
                    borderType="primary"
                  />
                  <RoundButton
                    status={smoking === '상관 없어요!' ? 'active' : 'inactive'}
                    label={'상관 없어요!'}
                    height={56}
                    onClick={() => setSmoking('상관 없어요!')}
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
                    label={`${drink[0]} - ${drink[1]} 회`}
                    color={'Primary500'}
                    typography={'LeferiBaseRegular'}
                    weight={700}
                    size={20}
                  />
                  {/* 슬라이더 수정 이후 패딩 값 수정*/}
                  <Col padding="0 20px">
                    <RangeSlider
                      value={drink}
                      onChange={drinkHandler}
                      min={0}
                      max={25}
                      markStep={5}
                      step={1}
                      maxMarkPostfix="~"
                    />
                  </Col>
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
