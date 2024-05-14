import Text from '~/components/typography/Text';
import Col from '~/components/layout/Col';
import Row from '~/components/layout/Row';
import { css } from '@emotion/react';
import RoundButton from '~/components/buttons/roundButton/RoundButton';
import { useInput } from '~/hooks/useInput';
import { useEffect, useState } from 'react';
import { useAtomValue, useSetAtom } from 'jotai';
import { pageFinishAtom } from '~/models/funnel';
import TextInput from '~/components/inputs/textInput/TextInput';
import Paddler from '~/components/layout/Pad';
import { combinedValidatiesAtoms } from '~/models';
import { commonDataAtoms } from '~/models/common/data';
import { AuthAPI, MeetingAPI, PaymentAPI } from '~/api';
import API from '~/api/core';
import { isPaymentFinishedAtom } from '~/models/payment';
import { isLoggedInAtom } from '~/models/auth';

type Props = {
  setIsRegisteredUoslife: React.Dispatch<boolean>;
};

const SecondPage = ({ setIsRegisteredUoslife }: Props) => {
  const pageValidity = useAtomValue(combinedValidatiesAtoms)
    .commonUnivVerificationStep.page3;
  const setPageState = useSetAtom(
    commonDataAtoms.commonUnivVerificationStep.page3,
  );
  const setIsPageFinished = useSetAtom(pageFinishAtom);
  const setIsLoggedIn = useSetAtom(isLoggedInAtom);
  setIsPageFinished(pageValidity);
  const setIsPaymentFinishedValue = useSetAtom(isPaymentFinishedAtom);
  const { inputValue, handleInputChange } = useInput('');
  const {
    inputValue: validateCodeValue,
    setValueClear: resetValidateCode,
    handleInputChange: handleValidateCodeValue,
  } = useInput('');
  const [timer, setTimer] = useState(60 * 60);
  const [tryValidate, setTryValidate] = useState(false);
  const [validateStatus, setValidateStatus] = useState('');
  const [statusMessage, setStatusMessage] = useState(
    '휴대전화로 발송된 인증번호를 입력해주세요.',
  );

  const handleValidateCodeInput = (value: string) => {
    switch (value) {
      case '':
        return 'default';
      case 'error':
        return `error`;
      case 'success':
        return `focused`;
      default:
        return 'default';
    }
  };

  const handleValidateCodeMessage = (value: string) => {
    switch (value) {
      case '':
        return 'Gray500';
      case 'error':
        return `Red200`;
      case 'success':
        return `Primary500`;
      default:
        return 'Gray500';
    }
  };

  // 인증번호 받기
  const getValidateNumber = async () => {
    if (inputValue) setTryValidate(true);
    await AuthAPI.getVerificationCodeByPhone({
      phoneNumber: inputValue,
    });
  };

  // 시대팅 유저 토큰 주입 로직
  const handleUserInfo = async () => {
    try {
      // 시대생 계정에서 유저Id 탐색.
      const uoslifeUserInfoRes = await AuthAPI.getUoslifeUserInfo();
      // 유저Id로 미팅 계정 토큰 조회.
      const createMeetingUserRes = await MeetingAPI.createUser({
        userId: uoslifeUserInfoRes.data.id,
      });
      // 미팅 계정 토큰 주입
      API.defaults.headers.common['Authorization'] =
        `Bearer ${createMeetingUserRes.data.accessToken}`;
      // 결제 여부 확인
      await PaymentAPI.verifyPayment()
        .then(() => {
          setIsPaymentFinishedValue(false);
        })
        .catch(error => {
          if (error.response.data.code === 'P04')
            setIsPaymentFinishedValue(true);
        });
    } catch (e) {
      setStatusMessage('인증 과정에서 문제가 생겼습니다. 다시 인증해주세요.');
      setValidateStatus('error');
      resetValidateCode();
      throw Error;
    }
  };

  // 핸드폰 인증 로직
  const handleCheckVerificationCode = async () => {
    try {
      const { data } = await AuthAPI.checkVerificationCodeByPhone({
        phoneNumber: inputValue,
        code: validateCodeValue,
      });
      // 인증번호 성공 시, 토큰 헤더 주입
      API.defaults.headers.common['Authorization'] =
        `Bearer ${data.accessToken}`;
      // API.defaults.headers.common['Authorization'] =
      //   'Bearer eyJhbGciOiJSU0FTU0FfUFNTX1NIQV81MTIiLCJraWQiOiJ1b3NsaWZlL2FjY291bnQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJ1b3NsaWZlL2FjY291bnQiLCJhdWQiOiJ1b3NsaWZlL2FjY291bnQvYWNjZXNzX3Rva2VuIiwic3ViIjoiMTEiLCJuYmYiOjE3MTUyMzQwMTUsImlhdCI6MTcxNTIzNDAxNSwiZXhwIjoxNzE1MjM3NjE1fQ.bByZEIewGXBl_qc6svyTgmpMfxRZgl9DuWc9gkKn8aJMffi51osYzKY1YKEyyG5328B7c5GoklJaMfL35h-vNEfMS4vkk7t0wPohZJxgGqgSl2wt1D64mPrYS4VO4iT2oual86fm4Ap6mKMS8WTQk7WiiiYUJPC5BQULudrQjgMHTS2zX_k_OGhzHC3f8MOHBKJiP2-C5rgAYlvTBTpeJ6UyHm5GTnGFaHMf2-dGnbmSeXo2HUXfPy0SMkZEKe_9zELKqARdlwX1p40P3Vodq4LQz0NpotqRiEz_0Cr_xQH0a6JsQZ82HBpYzUW6vSFBtQrhOrAGbO___y2cyJbdZ86u89w9UWQ5Rr3veq9KQCnD0FQjSJQNvcQ-qRCauupp_9TDUVQ7YCA88hsWrauU6739eyikvaPH5NL6D7HoTjC9XrFFxNJdQ2t_48901tIUVR2GpaQVqLlWN3UDaoJ7IQzsGLjw79lQxur5S5mTd8oPAGcbezWnyoqxJJ2GcV5JF7RpW1fePKHgJ9IpYlfsODaKOBgdbFYVthOYFtPf197Ftzcbar3kmhO3Ss0_wNouH3jBSk4YYF2TCH_ExpQ4e2wz1jq8k7kXzS-VKrk0EQ3UNJiaLuIPwCL7S9UO8DxbNnn6loInW4_hysO_KS97VF3S8o4b9mbW1SA0OKIt1S4';
      return data;
    } catch (e) {
      setStatusMessage('유효하지 않은 인증번호입니다.');
      setValidateStatus('error');
      resetValidateCode();
      throw Error;
    }
  };

  // 인증번호 확인
  const handleValidate = async () => {
    if (!validateCodeValue) return setStatusMessage('인증번호를 입력해주세요!');
    const { reason } = await handleCheckVerificationCode();
    // 만약 가입한 사용자라면 유저 정보 바로 추출
    if (reason === 'logged_in') {
      await handleUserInfo();
      setIsRegisteredUoslife(false);
      setIsLoggedIn(true);
      setPageState({
        verified: true,
      });
      setStatusMessage('인증되었습니다.');
      setValidateStatus('success');
      return;
    }
  };

  //인증번호 입력 제한시간
  useEffect(() => {
    let interval: number;
    if (tryValidate) {
      if (timer === 0) {
        setStatusMessage(
          '제한 시간이 만료되었습니다. 인증 코드를 재발급해주세요!',
        );
        setValidateStatus('error');
        return;
      }
      interval = setInterval(() => {
        setTimer(prevTime => prevTime - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer, tryValidate]);

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  return (
    <Paddler top={36} right={20} bottom={24} left={20}>
      <Col gap={28}>
        <Col align={'center'} gap={12}>
          <Text
            label={
              '‘시대팅의 원활한 이용을 위해\n' +
              '본인의 전화번호를 입력해주세요 (*^࿄^*)'
            }
            color={'Gray500'}
            typography={'NeoTitleM'}
          />
          <Text
            label={'인증번호 전송은 1일 5회로 제한됩니다.'}
            color={'Gray400'}
            typography={'GoThicBodyS'}
            css={css`
              text-align: center;
            `}
          />
        </Col>
        <Col gap={12}>
          <Row gap={8}>
            <TextInput
              placeholder={'01012345678'}
              value={inputValue}
              status={'default'}
              isAuthentication={true}
              maxLength={11}
              onChange={handleInputChange}
            />
            <RoundButton
              onClick={getValidateNumber}
              status={inputValue.length === 11 ? 'active' : 'disabled'}
              borderType={'gray'}
              height={44}
              width={94}>
              <Text
                label={tryValidate ? '재전송' : '인증하기'}
                color={'White'}
                typography={'NeoButtonS'}
              />
            </RoundButton>
          </Row>
          {tryValidate && (
            <Col gap={6}>
              <Row gap={8}>
                {/*TODO: 인증번호가 숫자인지 문자인지 백엔드쪽에 확인해서 input type 제한 걸기*/}
                <TextInput
                  placeholder={'인증번호 입력'}
                  value={validateCodeValue}
                  status={handleValidateCodeInput(validateStatus)}
                  onChange={handleValidateCodeValue}>
                  <Text
                    label={`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`}
                    color={'Gray300'}
                    typography={'GoThicButtonM'}
                  />
                </TextInput>
                <RoundButton
                  onClick={handleValidate}
                  status={
                    validateCodeValue.length === 6 ? 'active' : 'disabled'
                  }
                  borderType={'gray'}
                  height={44}
                  width={94}>
                  <Text
                    label={'확인'}
                    color={'White'}
                    typography={'NeoButtonS'}
                  />
                </RoundButton>
              </Row>
              <Text
                label={statusMessage}
                color={handleValidateCodeMessage(validateStatus)}
                typography={'GoThicLabelS'}
              />
            </Col>
          )}
        </Col>
      </Col>
    </Paddler>
  );
};

export default SecondPage;
