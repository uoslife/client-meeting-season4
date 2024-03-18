import Col from '~/components/layout/Col';
import Text from '~/components/typography/Text';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import { colors } from '~/styles/colors';
import { typographies } from '~/styles/typographies';
import ParticipationModal from '~/components/modal/participationModal/ParticipationModal';
import { groupDataAtoms } from '~/models/group/data';
import { useAtomValue, useSetAtom } from 'jotai';
import { pageFinishAtom } from '~/models/funnel';
import { combinedValidatiesAtoms } from '~/models';

const FirstPage = () => {
  const setPageState = useSetAtom(
    groupDataAtoms.groupMemberParticipateStep.page1,
  );

  const inputRef = useRef<HTMLInputElement | null>(null);
  const [code, setCode] = useState('');
  const [isError] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setCode(inputValue.toUpperCase());
  };

  const showStatusMessage = () => {
    if (code.length != 4) return '';
    return isError ? '유효하지 않는 코드입니다.' : '유효한 코드입니다';
  };

  useEffect(() => {
    const input = inputRef.current;
    !!input && input.focus();
  }, [inputRef]);

  useEffect(() => {
    if (code.length === 4) setIsModal(true);
  }, [code, setCode]);

  const setIsPageFinished = useSetAtom(pageFinishAtom);
  const pageValidity = useAtomValue(combinedValidatiesAtoms)
    .groupMemberParticipateStep.page1;
  setIsPageFinished(pageValidity);

  return (
    <>
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
          <S.Code isError={isError} active={!!code && code.length === 1}>
            {code?.[0]}
          </S.Code>
          <S.Code isError={isError} active={!!code && code.length === 2}>
            {code?.[1]}
          </S.Code>
          <S.Code isError={isError} active={!!code && code.length === 3}>
            {code?.[2]}
          </S.Code>
          <S.Code isError={isError} active={!!code && code.length === 4}>
            {code?.[3]}
          </S.Code>
          <S.Input
            maxLength={4}
            ref={inputRef}
            value={code}
            onChange={handleInputValue}
          />
        </S.Container>
        <Text
          label={showStatusMessage()}
          color={isError ? 'Red200' : 'Primary500'}
          typography={'NeoButtonS'}
        />
      </Col>
      <ParticipationModal
        isActive={isModal}
        label={'api 팅원 이름 연결'}
        currentParticipant={1}
        maxParticipant={3}
        cancelButtonClicked={() => setIsModal(false)}
        joinButtonClicked={() => {
          setIsModal(false);
          setPageState({ verified: true });
        }}
      />
    </>
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
  Code: styled.div<{ active: boolean; isError: boolean }>`
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

    ${({ isError }) =>
      isError &&
      css`
        border-color: ${colors.Red200};
      `};
  `,
  Input: styled.input`
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: transparent;
    background: transparent;
    border: none;

    &:focus {
      outline: none;
    }
  `,
};
