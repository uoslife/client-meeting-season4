import { css } from '@emotion/react';
import { useAtomValue, useSetAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { AuthAPI } from '~/api';
import RoundButton from '~/components/buttons/roundButton/RoundButton';
import TextInput from '~/components/inputs/textInput/TextInput';
import Col from '~/components/layout/Col';
import Paddler from '~/components/layout/Pad';
import Row from '~/components/layout/Row';

import Text from '~/components/typography/Text';
import { useInput } from '~/hooks/useInput';
import { combinedValidatiesAtoms } from '~/models';
import { commonDataAtoms } from '~/models/common/data';
import { pageFinishAtom } from '~/models/funnel';

// copied from src\pages\common\univVerificationStep\ThirdPage.tsx
const SecondPage = () => {
  const setIsPageFinished = useSetAtom(pageFinishAtom);
  const pageValidity = useAtomValue(combinedValidatiesAtoms)
    .commonVerifyForMatchingResultStep.page2;
  const { univType } = useAtomValue(
    commonDataAtoms.commonVerifyForMatchingResultStep.page1,
  );
  setIsPageFinished(pageValidity);

  const setPageState = useSetAtom(
    commonDataAtoms.commonVerifyForMatchingResultStep.page2,
  );

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
    '메일로 발송된 인증번호를 입력해주세요.',
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
  // 인증번호 확인 절차
  const handleTryValidate = async () => {
    if (inputValue) setTryValidate(true);
    const res = await AuthAPI.getVerificationCode({
      email: inputValue,
      university: univType,
    });

    console.log(res);
  };

  // 인증번호 확인 절차
  const handleValidate = async () => {
    if (!validateCodeValue) return setStatusMessage('인증번호를 입력해주세요!');
    if (validateCodeValue === '1234') {
      const res = await AuthAPI.checkVerificationCode({
        code: parseInt(validateCodeValue),
        email: inputValue,
        university: univType,
      });
      const result = res.data;
      console.log(result);
      setPageState({ verified: true });
      localStorage.setItem('accessToken', result.accessToken);
      localStorage.setItem('refreshToken', result.refreshToken);
      setStatusMessage('인증되었습니다.');
      setValidateStatus('success');
    } else {
      setStatusMessage('유효하지 않은 인증번호입니다.');
      setValidateStatus('error');
      resetValidateCode();
    }
  };
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
            label={'학교 웹메일을 입력해 주세요 (*^࿄^*)'}
            color={'Gray500'}
            typography={'NeoTitleM'}
          />
          <Text
            label={
              '‘시대팅X트로이카’는 시립대, 경희대, 한국외대\n' +
              ' 학생들에게만 제공되는 서비스입니다.\n' +
              '해당 학교 구성원임을 인증 후 신청을 진행해 주세요!'
            }
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
              placeholder={'웹메일 주소 입력'}
              value={inputValue}
              status={'default'}
              isAuthentication={true}
              onChange={handleInputChange}>
              <Text
                label={univType === 'KHU' ? '@khu.ac.kr' : '@hufs.ac.kr'}
                color={'Gray400'}
                typography={'GoThicButtonM'}
                css={css`
                  padding-left: 5px;
                `}
              />
            </TextInput>
            <RoundButton
              onClick={handleTryValidate}
              status={inputValue ? 'active' : 'disabled'}
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
                  placeholder={'인증번호 입력(1234)'}
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
                  status={validateCodeValue ? 'active' : 'disabled'}
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
