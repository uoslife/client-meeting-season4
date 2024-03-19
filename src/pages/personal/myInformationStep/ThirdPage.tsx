import PageLayout from '~/components/layout/page/PageLayout';
import Paddler from '~/components/layout/Pad';
import Col from '~/components/layout/Col';
import Row from '~/components/layout/Row';
import Text from '~/components/typography/Text';
import RoundButton from '~/components/buttons/roundButton/RoundButton';
import RangeSlider from '~/components/rangeSlider/RangeSlider';
import { css } from '@emotion/react';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { pageFinishAtom } from '~/models/funnel';
import { personalDataAtoms } from '~/models/personal/data';
import { combinedValidatiesAtoms } from '~/models';

const ThirdPage = () => {
  const [pageState, setPageState] = useAtom(
    personalDataAtoms.personalMyInformationStep.page3,
  );

  const pageValidity = useAtomValue(combinedValidatiesAtoms)
    .personalMyInformationStep.page3;
  const setIsPageFinished = useSetAtom(pageFinishAtom);
  setIsPageFinished(!!pageValidity);

  const { drinkRange, religion, smoking } = pageState;

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
                    {/* TODO: 반복되는 요소 리팩토링 */}
                    <RoundButton
                      status={religion === '기독교' ? 'active' : 'inactive'}
                      label={'기독교'}
                      height={56}
                      onClick={() =>
                        setPageState(prev => ({ ...prev, religion: '기독교' }))
                      }
                      borderType="primary"
                    />
                    <RoundButton
                      status={religion === '천주교' ? 'active' : 'inactive'}
                      label={'천주교'}
                      height={56}
                      onClick={() =>
                        setPageState(prev => ({ ...prev, religion: '천주교' }))
                      }
                      borderType="primary"
                    />
                  </Row>
                  <Row gap={12}>
                    <RoundButton
                      status={religion === '불교' ? 'active' : 'inactive'}
                      label={'불교'}
                      height={56}
                      onClick={() =>
                        setPageState(prev => ({ ...prev, religion: '불교' }))
                      }
                      borderType="primary"
                    />
                    <RoundButton
                      status={religion === '무교' ? 'active' : 'inactive'}
                      label={'무교'}
                      height={56}
                      onClick={() =>
                        setPageState(prev => ({ ...prev, religion: '무교' }))
                      }
                      borderType="primary"
                    />
                  </Row>
                  <Row gap={12}>
                    <RoundButton
                      status={religion === '기타' ? 'active' : 'inactive'}
                      label={'기타'}
                      height={56}
                      onClick={() =>
                        setPageState(prev => ({ ...prev, religion: '기타' }))
                      }
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
                      setPageState(prev => ({ ...prev, smoking: '비흡연' }))
                    }
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
                    label={`${drinkRange[0]} - ${drinkRange[1]} 회`}
                    color={'Primary500'}
                    typography={'LeferiBaseRegular'}
                    weight={700}
                    size={20}
                  />
                  {/* 슬라이더 수정 이후 패딩 값 수정*/}
                  <Col padding="15px">
                    <RangeSlider
                      value={drinkRange}
                      onChange={value => {
                        setPageState(prev => ({ ...prev, drinkRange: value }));
                      }}
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
