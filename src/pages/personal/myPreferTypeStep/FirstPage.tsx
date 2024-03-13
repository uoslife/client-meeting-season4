import PageLayout from '~/components/layout/page/PageLayout';
import Paddler from '~/components/layout/Pad';
import Col from '~/components/layout/Col';
import Row from '~/components/layout/Row';
import Text from '~/components/typography/Text';
import RoundButton from '~/components/buttons/roundButton/RoundButton';
import RangeSlider from '~/components/rangeSlider/RangeSlider';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { pageFinishAtom } from '~/store/funnel';
import { combinedValidatiesAtoms } from '~/models';
import { personalDataAtoms } from '~/models/personal/data';
import { StudentOption } from '~/models/options';

const FirstPage = () => {
  const [pageState, setPageState] = useAtom(
    personalDataAtoms.personalPreferInfoStep.page1,
  );

  const { ageRange, heightRange, studentTypes } = pageState;

  const pageValidity = useAtomValue(combinedValidatiesAtoms)
    .personalPreferInfoStep.page1;
  const setIsPageFinished = useSetAtom(pageFinishAtom);
  setIsPageFinished(pageValidity);

  return (
    <PageLayout.SingleCardBody
      children={
        <Paddler top={36} right={20} bottom={24} left={20}>
          <Row>
            <Col gap={56}>
              <Col gap={28}>
                <Col gap={12} align="center">
                  <Text
                    label={'1. 선호하는 상대의 나이를 선택해 주세요'}
                    color={'Gray500'}
                    typography={'NeoTitleM'}
                    weight={400}
                    size={18}
                  />
                  <Text
                    label={'한국 나이(만 나이X) 기준으로 입력해주세요.'}
                    color={'Secondary800'}
                    typography={'GoThicBodyS'}
                    weight={400}
                    size={14}
                  />
                </Col>
                <Col gap={32} align="center">
                  <Text
                    label={`${ageRange[0]} - ${ageRange[1]}세`}
                    color={'Primary500'}
                    typography={'LeferiBaseRegular'}
                    weight={700}
                    size={20}
                  />
                  {/* 슬라이더 수정 이후 패딩 값 수정*/}
                  <Col padding="0 20px">
                    <RangeSlider
                      value={ageRange}
                      onChange={value =>
                        setPageState(prev => ({
                          ...prev,
                          ageRange: value,
                        }))
                      }
                      min={20}
                      max={30}
                      markStep={1}
                      step={1}
                      maxMarkPostfix="~"
                    />
                  </Col>
                </Col>
              </Col>

              <Col gap={28} align="center">
                <Text
                  label={'2. 선호하는 상대의 키를 선택해 주세요'}
                  color={'Gray500'}
                  typography={'NeoTitleM'}
                  weight={400}
                  size={18}
                />
                <Col gap={32} align="center">
                  <Text
                    label={`${heightRange[0]} - ${heightRange[1]} cm`}
                    color={'Primary500'}
                    typography={'LeferiBaseRegular'}
                    weight={700}
                    size={20}
                  />
                  {/* 슬라이더 수정 이후 패딩 값 수정*/}
                  <Col padding="0 20px">
                    <RangeSlider
                      value={heightRange}
                      onChange={value =>
                        setPageState(prev => ({
                          ...prev,
                          heightRange: value,
                        }))
                      }
                      min={150}
                      max={190}
                      markStep={5}
                      step={5}
                      minMarkPrefix="~"
                      maxMarkPostfix="~"
                    />
                  </Col>
                </Col>
              </Col>

              <Col gap={28}>
                <Col gap={8} align="center">
                  <Text
                    label={'3. 선호하는 상대의 신분을 선택해 주세요'}
                    color={'Gray500'}
                    typography={'NeoTitleM'}
                    weight={400}
                    size={18}
                  />
                  <Text
                    label={
                      '복수 선택이 가능하며 무관한 경우 모두 선택해 주세요.'
                    }
                    color={'Secondary800'}
                    typography={'GoThicBodyS'}
                    weight={400}
                    size={14}
                  />
                </Col>
                <Col gap={8}>
                  <RoundButton
                    status={
                      studentTypes.includes('학부생') ? 'active' : 'inactive'
                    }
                    label={'학부생'}
                    height={56}
                    onClick={() =>
                      setPageState(prev => {
                        const newStudentTypes: StudentOption[] =
                          studentTypes.includes('학부생')
                            ? studentTypes.filter(type => type !== '학부생')
                            : [...studentTypes, '학부생'];

                        return {
                          ...prev,
                          studentTypes: newStudentTypes,
                        };
                      })
                    }
                    borderType="primary"
                  />
                  <RoundButton
                    status={
                      studentTypes.includes('대학원생') ? 'active' : 'inactive'
                    }
                    label={'대학원생'}
                    height={56}
                    onClick={() =>
                      setPageState(prev => {
                        const newStudentTypes: StudentOption[] =
                          studentTypes.includes('대학원생')
                            ? studentTypes.filter(type => type !== '대학원생')
                            : [...studentTypes, '대학원생'];

                        return {
                          ...prev,
                          studentTypes: newStudentTypes,
                        };
                      })
                    }
                    borderType="primary"
                  />
                  <RoundButton
                    status={
                      studentTypes.includes('졸업생') ? 'active' : 'inactive'
                    }
                    label={'졸업생'}
                    height={56}
                    onClick={() =>
                      setPageState(prev => {
                        const newStudentTypes: StudentOption[] =
                          studentTypes.includes('졸업생')
                            ? studentTypes.filter(type => type !== '졸업생')
                            : [...studentTypes, '졸업생'];

                        return {
                          ...prev,
                          studentTypes: newStudentTypes,
                        };
                      })
                    }
                    borderType="primary"
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

export default FirstPage;
