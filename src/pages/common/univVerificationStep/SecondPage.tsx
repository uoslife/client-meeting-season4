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
  isRegisteredUoslife: boolean;
};

const SecondPage = ({ setIsRegisteredUoslife, isRegisteredUoslife }: Props) => {
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
      const createMeetingUserRes = await MeetingAPI.createUser();
      // 미팅 계정 토큰 주입
      API.defaults.headers.common['Authorization'] =
        `Bearer ${createMeetingUserRes.data.accessToken}`;
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
      if (data.refreshToken) {
        localStorage.setItem('refreshToken', data.refreshToken);
      }
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
      await PaymentAPI.verifyPayment()
        .then(() => {
          setIsPaymentFinishedValue(false);
        })
        .catch(error => {
          if (error.response.data.code === 'P04')
            setIsPaymentFinishedValue(true);
        });
      return;
    }
    setIsLoggedIn(true);
    setPageState({
      verified: true,
    });
    setStatusMessage('인증되었습니다.');
    setValidateStatus('success');
  };

  //인증번호 입력 제한시간
  useEffect(() => {
    if (!isRegisteredUoslife) {
      setStatusMessage('인증되었습니다.');
      setValidateStatus('success');
    }
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
  }, [timer, tryValidate, isRegisteredUoslife]);

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
