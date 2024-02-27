import Text from '~/components/typography/Text';
import Col from '~/components/layout/Col';
import Row from '~/components/layout/Row';
import { css } from '@emotion/react';
import TextInput from '~/components/inputs/TextInput';
import RoundButton from '~/components/buttons/roundButton/RoundButton';
import { useInput } from '~/hooks/useInput';
import { useState } from 'react';
import { useSetAtom } from 'jotai/index';
import { pageFinishAtom } from '~/store/funnel';

const SecondPage = () => {
  const setIsPageFinished = useSetAtom(pageFinishAtom);
  const { inputValue, _, handleInputChange } = useInput('');
  const { validateCodeValue, setValidateCodeCleaer, handleValidateCodeValue } =
    useInput('');
  const [tryValidate, setTryValidate] = useState(false);
  const [validateCodeStatus, setValidateCodeStatus] = useState('');

  const handleValidateCodeStatus = (value: string) => {
    switch (value) {
      case '':
        return 'default';
      case 'error':
        return `error`;
      default:
        return 'default';
    }
  };
  // 인증번호 확인 절차
  const handleTryValidate = () => {
    if (inputValue) setTryValidate(true);
    // 인증코드 api 부착
  };

  // 인증번호 확인 절차
  const handleValidate = () => {};

  return (
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
              label={'@khu.ac.kr'}
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
            borderType={'sky'}
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
          <Row gap={8}>
            <TextInput
              placeholder={'인증번호 입력'}
              value={validateCodeValue}
              status={handleValidateCodeStatus(validateCodeValue)}
              isAuthentication={true}
              onChange={handleValidateCodeValue}
            />
            <RoundButton
              onClick={() => setIsPageFinished(true)}
              status={'disabled'}
              borderType={'sky'}
              height={44}
              width={94}>
              <Text label={'확인'} color={'White'} typography={'NeoButtonS'} />
            </RoundButton>
          </Row>
        )}
      </Col>
    </Col>
  );
};

export default SecondPage;
