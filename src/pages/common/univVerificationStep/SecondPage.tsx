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
import CleanUpModal from '~/components/modal/cleanUpModal/CleanUpModal';
import { useNavigate } from 'react-router-dom';

const SecondPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalText, setModalText] = useState('');
  const { univType } = useAtomValue(
    commonDataAtoms.commonUnivVerificationStep.page1,
  );
  const navigate = useNavigate();
  const pageValidity = useAtomValue(combinedValidatiesAtoms)
    .commonUnivVerificationStep.page3;
  const setPageStateForNumber = useSetAtom(
    commonDataAtoms.commonUnivVerificationStep.page3,
  );
  const setPageStateForEmail = useSetAtom(
    commonDataAtoms.commonUnivVerificationStep.page4,
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
    setPageStateForNumber({
      verified: false,
    });
    try {
      await AuthAPI.getVerificationCodeByPhone({
        phoneNumber: inputValue,
      });
    } catch (err) {
      // @ts-expect-error custom error object
      if (err.response.data.message !== 'TOO_MANY_PHONE_OTP_REQUEST') return;
      setStatusMessage(
        '문자 인증 요청 횟수(5회)가 초과되었습니다. 잠시 후 다시 시도해주세요',
      );
      setValidateStatus('error');
    }
  };

  /** 가입 O, 신분인증 O, 시대팅 계정 생성 O -> 다음 팅 선택으로 으로 넘어갑니다 */
  const handleNextStepForLoginedUser = async () => {
    setIsLoggedIn(true); // login 상태 true
    setPageStateForNumber({
      verified: true,
    });
    setStatusMessage('인증되었습니다.');
    setValidateStatus('success');
    setPageStateForEmail({ verified: true });
    navigate('/common/branchGatewayStep');
    await PaymentAPI.verifyPayment()
      .then(() => {
        setIsPaymentFinishedValue(false);
      })
      .catch(error => {
        if (error.response.data.code === 'P04') {
          setIsPaymentFinishedValue(true);
          navigate('/common/checkAfterAlreadyAppliedStep'); // TODO: 검증 필요 @김영찬
        }
      });
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
      return data.reason;
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
    setIsPaymentFinishedValue(true);
    const reason = await handleCheckVerificationCode();
    // 가입 X
    if (reason !== 'logged_in') {
      // 시대생 -> 앱에서 가입 안내
      if (univType === 'UOS') {
        setModalText('회원가입');
        setIsModalOpen(true);
        return;
      }
      // 타대생 -> 이메일 인증
      setIsLoggedIn(true);
      setPageStateForNumber({
        verified: true,
      });
      setStatusMessage('인증되었습니다.');
      setValidateStatus('success');
      return;
    }
    const { data: InfoData } = await AuthAPI.getUoslifeUserInfo();
    // 가입 O, 신분인증 O
    if (InfoData.isVerified) {
      // '시대팅' 유저 조회
      await MeetingAPI.getUser()
        .then(async () => {
          // 있으면 다음 로직
          await handleNextStepForLoginedUser();
        })
        .catch(
          async () =>
            // 없으면 유저 생성 후, 다음 로직
            await handleNextStepForLoginedUser(),
        );
      return;
    }
    // 타대생 -> 다음 step (이메일 인증)
    setPageStateForNumber({
      verified: true,
    });
    setStatusMessage('인증되었습니다.');
    setValidateStatus('success');
    return;
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
          <Col align={'center'} justify={'center'} gap={4}>
            <Text
              label={'인증번호 전송은 1일 5회로 제한됩니다.'}
              color={'Gray400'}
              typography={'GoThicBodyS'}
              css={css`
                text-align: center;
              `}
            />
            <Text
              label={
                '시립대 학생은 서비스 이용을 위해 반드시 시대생 앱의 포털 인증이 필요합니다!'
              }
              color={'Gray400'}
              typography={'GoThicBodyS'}
              weight={400}
              size={14}
              css={css`
                text-align: center;
              `}
            />
          </Col>
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
              type="number"
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
                <TextInput
                  placeholder={'인증번호 입력'}
                  value={validateCodeValue}
                  status={handleValidateCodeInput(validateStatus)}
                  onChange={handleValidateCodeValue}
                  type="number"
                  maxLength={6}>
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
      {isModalOpen && (
        <CleanUpModal
          title={`시대생 ${modalText}을 하지 않으셨나요?`}
          description={`시대생 앱에서 ${modalText}을 진행 후 신청해주세요.`}
          setIsCleanUpModalOpen={setIsModalOpen}
        />
        // <CleanUpModal
        //   title={'시대생 포털 인증을 하지 않으셨나요?'}
        //   description={'시대생 앱에서 포털 인증을 진행 후\n' + '신청해주세요.'}
        //   setIsCleanUpModalOpen={setIsModalOpen}
        // />
      )}
    </Paddler>
  );
};

export default SecondPage;
