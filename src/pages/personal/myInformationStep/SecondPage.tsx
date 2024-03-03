import PageLayout from '~/components/layout/page/PageLayout';
import Col from '~/components/layout/Col';
import Row from '~/components/layout/Row';
import Text from '~/components/typography/Text';
import TextInput from '~/components/inputs/textInput/TextInput';
import RoundButton from '~/components/buttons/roundButton/RoundButton';
import { useInput } from '~/hooks/useInput';
import { useAtom, useSetAtom } from 'jotai';
import { personalApplyAtoms } from '~/store/meeting';
import { pageFinishAtom } from '~/store/funnel';

const SecondPage = () => {
  const { inputValue: kakaoId, handleInputChange: handleKakaoIdChange } =
    useInput('');
  const { inputValue: department, handleInputChange: handleDepartmentChange } =
    useInput('');
  const [studentType, setStudentType] = useAtom(
    personalApplyAtoms.myInfo_studentType,
  );

  const isAllInputsFilled = kakaoId && department && studentType;
  const setIsPageFinished = useSetAtom(pageFinishAtom);
  setIsPageFinished(!!isAllInputsFilled);

  return (
    <PageLayout.SingleCardBody
      cardPadding="36px 20px 124px 20px"
      children={
        <Row>
          <Col gap={56}>
            <Col gap={28}>
              <Col gap={12} align="center">
                <Text
                  label={'5. 본인의 카카오톡 ID를 입력해 주세요.'}
                  color={'Gray500'}
                  typography={'NeoTitleM'}
                  weight={400}
                  size={18}
                />
                <Col align="center">
                  <Text
                    label={'매칭 이후 상대와의 연락 수단으로 활용됩니다.'}
                    color={'Gray400'}
                    typography={'GoThicBodyS'}
                    weight={400}
                    size={14}
                  />
                  <Text
                    label={'카카오톡 [설정]-[프로필 관리]-[카카오톡 ID]에서'}
                    color={'Gray400'}
                    typography={'GoThicBodyS'}
                    weight={400}
                    size={14}
                  />
                  <Text
                    label={'ID 검색 허용이 되어있는지 확인해 주세요.'}
                    color={'Gray400'}
                    typography={'GoThicBodyS'}
                    weight={400}
                    size={14}
                  />
                </Col>
              </Col>
              <TextInput
                value={kakaoId}
                status={'default'}
                placeholder={'카카오톡 ID 입력'}
                onChange={handleKakaoIdChange}
              />
            </Col>
            <Col gap={28}>
              <Col gap={12} align="center">
                <Text
                  label={'6. 본인의 학과를 입력해 주세요.'}
                  color={'Gray500'}
                  typography={'NeoTitleM'}
                  weight={400}
                  size={18}
                />
                <Col align="center">
                  <Text
                    label={'학과명을 정확히 입력해 주세요.'}
                    color={'Gray400'}
                    typography={'GoThicBodyS'}
                    weight={400}
                    size={14}
                  />
                  <Text
                    label={'Ex. 국어국문학과(O), 국문과(X)'}
                    color={'Gray400'}
                    typography={'GoThicBodyS'}
                    weight={400}
                    size={14}
                  />
                </Col>
              </Col>
              <TextInput
                value={department}
                status={'default'}
                placeholder={'학과명 입력 (2글자 이상)'}
                onChange={handleDepartmentChange}
              />
            </Col>
            <Col gap={28} align="center">
              <Text
                label={'7. 본인의 신분을 선택해 주세요.'}
                color={'Gray500'}
                typography={'NeoTitleM'}
                weight={400}
                size={18}
              />
              <Col gap={8}>
                <RoundButton
                  status={studentType === '학부생' ? 'active' : 'inactive'}
                  label={'학부생'}
                  height={56}
                  onClick={() => setStudentType('학부생')}
                  borderType="primary"
                />
                <RoundButton
                  status={studentType === '대학원생' ? 'active' : 'inactive'}
                  label={'대학원생'}
                  height={56}
                  onClick={() => setStudentType('대학원생')}
                  borderType="primary"
                />
                <RoundButton
                  status={studentType === '졸업생' ? 'active' : 'inactive'}
                  label={'졸업생'}
                  height={56}
                  onClick={() => setStudentType('졸업생')}
                  borderType="primary"
                />
              </Col>
            </Col>
          </Col>
        </Row>
      }
    />
  );
};

export default SecondPage;
