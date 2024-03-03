import Col from '~/components/layout/Col';
import Text from '~/components/typography/Text';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import { colors } from '~/styles/colors';
import { typographies } from '~/styles/typographies';

const FirstPage = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [code, setCode] = useState('');

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setCode(inputValue.toUpperCase());
  };

  useEffect(() => {
    const input = inputRef.current;
    !!input && input.focus();
  }, [inputRef]);
  return (
    <Col align={'center'} gap={20} padding={'36px 20px'}>
      <Text
        label={'팅을 만든 친구가 있나요?\n' + '공유받은 코드를 입력해 주세요'}
        color={'Gray500'}
        typography={'NeoTitleM'}
        css={css`
          text-align: center;
        `}
      />
      <S.Container onClick={() => inputRef.current?.focus()}>
        <S.Code active={!!code && code.length === 1}>{code?.[0]}</S.Code>
        <S.Code active={!!code && code.length === 2}>{code?.[1]}</S.Code>
        <S.Code active={!!code && code.length === 3}>{code?.[2]}</S.Code>
        <S.Code active={!!code && code.length === 4}>{code?.[3]}</S.Code>
        <S.Input
          type="text"
          maxLength={4}
          ref={inputRef}
          value={code}
          onChange={handleInputValue}
        />
      </S.Container>
    </Col>
  );
};

export default FirstPage;

const S = {
  Container: styled.div`
    display: flex;
    margin: 32px auto;
    gap: 12px;
    position: relative;
    align-items: center;
    justify-content: center;
  `,
  Code: styled.div<{ active: boolean }>`
    ${() => typographies.NeoLabel};
    font-size: 60px;
    color: ${colors.Secondary900};
    width: 40px;
    height: 60px;
    text-align: center;
    border-bottom: 4px solid ${() => colors.Gray100};
    white-space: pre;

    ${({ active }) =>
      active &&
      css`
        border-color: ${colors.Primary300};
      `};
  `,
  Input: styled.input`
    display: block;
    height: 0;
    width: 0;
    border: 0;
    padding: 0;
  `,
};
