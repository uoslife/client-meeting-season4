import PageLayout from '~/components/layout/page/PageLayout';
import Paddler from '~/components/layout/Pad';
import Col from '~/components/layout/Col';
import Row from '~/components/layout/Row';
import Text from '~/components/typography/Text';
import RoundButton from '~/components/buttons/roundButton/RoundButton';
import RangeSlider from '~/components/rangeSlider/RangeSlider';
import useRangeState from '~/hooks/useRangeState';
import { css } from '@emotion/react';
import { useEffect } from 'react';
import { useAtom, useSetAtom } from 'jotai';
import { personalApplyAtoms } from '~/store/meeting';
import { pageFinishAtom } from '~/store/funnel';

const ThirdPage = () => {
  const [religion, setReligion] = useAtom(
    personalApplyAtoms.personalInfo_religion,
  );
  const [smoking, setSmoking] = useAtom(
    personalApplyAtoms.personalInfo_smoking,
  );
  const storedDrink = localStorage.getItem('personalInfo_drink');
  const parsedDrink = storedDrink === null ? [10, 17] : JSON.parse(storedDrink);
  const { rangeHandler: drinkHandler, rangeValue: drink } =
    useRangeState(parsedDrink);
  const [, setDrink] = useAtom(personalApplyAtoms.personalInfo_drink);
  const setIsPageFinished = useSetAtom(pageFinishAtom);

  useEffect(() => {
    setDrink(drink.map(Number));
    const isAllInputsFilled = religion && smoking && drink;
    setIsPageFinished(!!isAllInputsFilled);
  }, [religion, smoking, drink]);

  return (
    <PageLayout.SingleCardBody
      children={
        <Paddler top={36} right={20} bottom={24} left={20}>
          <Row>
            <Col gap={56}>
              <Col gap={28} align="center">
                <Text
                  label={'8. 본인의 종교를 선택해 주세요.'}
                  color={'Gray500'}
                  typography={'NeoTitleM'}
                  weight={400}
                  size={18}
                />
                <Col gap={12}>
                  <Row gap={12}>
                    <RoundButton
                      status={religion === '기독교' ? 'active' : 'inactive'}
                      label={'기독교'}
                      height={56}
                      onClick={() => setReligion('기독교')}
                      borderType="primary"
                    />
                    <RoundButton
                      status={religion === '천주교' ? 'active' : 'inactive'}
                      label={'천주교'}
                      height={56}
                      onClick={() => setReligion('천주교')}
                      borderType="primary"
                    />
                  </Row>
                  <Row gap={12}>
                    <RoundButton
                      status={religion === '불교' ? 'active' : 'inactive'}
                      label={'불교'}
                      height={56}
                      onClick={() => setReligion('불교')}
                      borderType="primary"
                    />
                    <RoundButton
                      status={religion === '무교' ? 'active' : 'inactive'}
                      label={'무교'}
                      height={56}
                      onClick={() => setReligion('무교')}
                      borderType="primary"
                    />
                  </Row>
                  <Row gap={12}>
                    <RoundButton
                      status={religion === '기타' ? 'active' : 'inactive'}
                      label={'기타'}
                      height={56}
                      onClick={() => setReligion('기타')}
                      borderType="primary"
                    />
                    <div
                      css={css`
                        width: 100%;
                      `}
                    />
                  </Row>
                </Col>
              </Col>
              <Col gap={28} align="center">
                <Text
                  label={'9. 흡연 여부를 선택해 주세요.'}
                  color={'Gray500'}
                  typography={'NeoTitleM'}
                  weight={400}
                  size={18}
                />
                <Col gap={12}>
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
                </Col>
              </Col>
              <Col gap={28} align="center">
                <Text
                  label={'10. 한 달 기준 음주 횟수를 선택해 주세요.'}
                  color={'Gray500'}
                  typography={'NeoTitleM'}
                  weight={400}
                  size={18}
                />
                {/* 슬라이더 수정 이후 gap 값 수정 */}
                <Col gap={17} align="center">
                  <Text
                    label={`${drink[0]} - ${drink[1]} 회`}
                    color={'Primary500'}
                    typography={'LeferiBaseRegular'}
                    weight={700}
                    size={20}
                  />
                  {/* 슬라이더 수정 이후 패딩 값 수정*/}
                  <Col padding="15px">
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

export default ThirdPage;
