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

const FirstPage = () => {
  const storedAge = localStorage.getItem('personalPrefer_age');
  const parsedAge = storedAge === null ? [24, 27] : JSON.parse(storedAge);
  const { rangeHandler: ageHandler, rangeValue: age } =
    useRangeState(parsedAge);
  const [, setAge] = useAtom(personalApplyAtoms.personalPrefer_age);

  const storedHeight = localStorage.getItem('personalPrefer_height');
  const parsedHeight =
    storedHeight === null ? [165, 175] : JSON.parse(storedHeight);
  const { rangeHandler: heightHandler, rangeValue: height } =
    useRangeState(parsedHeight);
  const [, setHeight] = useAtom(personalApplyAtoms.personalPrefer_height);

  const storedStudentType = localStorage.getItem('personalPrefer_studentType');
  const parsedStudentType =
    storedStudentType === null ? [] : JSON.parse(storedStudentType);
  const {
    selectedValues: studentType,
    select,
    checkSelectedValues,
  } = useToggleSelect<string>(3, parsedStudentType);
  const [, setStudentType] = useAtom(
    personalApplyAtoms.personalPrefer_studentType,
  );

  const setIsPageFinished = useSetAtom(pageFinishAtom);

  useEffect(() => {
    setAge(age.map(Number));
    setHeight(height.map(Number));
    setStudentType(studentType);
    const isAllInputsFilled = age && height && studentType.length > 0;
    setIsPageFinished(!!isAllInputsFilled);
  }, [age, height, studentType]);

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
                    label={`${age[0]} - ${age[1]}세`}
                    color={'Primary500'}
                    typography={'LeferiBaseRegular'}
                    weight={700}
                    size={20}
                  />
                  {/* 슬라이더 수정 이후 패딩 값 수정*/}
                  <Col padding="0 20px">
                    <RangeSlider
                      value={age}
                      onChange={ageHandler}
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
                    label={`${height[0]} - ${height[1]} cm`}
                    color={'Primary500'}
                    typography={'LeferiBaseRegular'}
                    weight={700}
                    size={20}
                  />
                  {/* 슬라이더 수정 이후 패딩 값 수정*/}
                  <Col padding="0 20px">
                    <RangeSlider
                      value={height}
                      onChange={heightHandler}
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
                      checkSelectedValues('학부생') ? 'active' : 'inactive'
                    }
                    label={'학부생'}
                    height={56}
                    onClick={() => select('학부생')()}
                    borderType="primary"
                  />
                  <RoundButton
                    status={
                      checkSelectedValues('대학원생') ? 'active' : 'inactive'
                    }
                    label={'대학원생'}
                    height={56}
                    onClick={() => select('대학원생')()}
                    borderType="primary"
                  />
                  <RoundButton
                    status={
                      checkSelectedValues('졸업생') ? 'active' : 'inactive'
                    }
                    label={'졸업생'}
                    height={56}
                    onClick={() => select('졸업생')()}
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
