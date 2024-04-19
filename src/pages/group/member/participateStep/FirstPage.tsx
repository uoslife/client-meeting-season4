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
import { MeetingAPI } from '~/api';
import toast from 'react-hot-toast';

type teamInfoType = {
  teamName: string;
  userList: object[];
};

const FirstPage = () => {
  const setPageState = useSetAtom(
    groupDataAtoms.groupMemberParticipateStep.page1,
  );

  const inputRef = useRef<HTMLInputElement | null>(null);
  const [code, setCode] = useState('');
  const [codeStatus, setCodeStatus] = useState('beforeTry');
  const [isModal, setIsModal] = useState(false);
  const [teamInfo, setTeamInfo] = useState<teamInfoType>({
    teamName: '',
    userList: [],
  });
  const setIsPageFinished = useSetAtom(pageFinishAtom);
  const pageValidity = useAtomValue(combinedValidatiesAtoms)
    .groupMemberParticipateStep.page1;
  setIsPageFinished(pageValidity);

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setCode(inputValue.toUpperCase());
  };

  const handleStatusMessage = () => {
    if (code.length != 4) return '';
    switch (codeStatus) {
      case 'beforeTry': {
        return '';
      }
      case 'error': {
        return '유효하지 않는 코드입니다.';
      }
      case 'success': {
        return '유효한 코드입니다.';
      }
      default:
        return '';
    }
  };

  const handleEnterCode = async () => {
    await MeetingAPI.getGroupStatus('TRIPLE', code)
      .then(res => {
        setTeamInfo({
          teamName: res.data.teamName,
          userList: res.data.userList,
        });
        setIsModal(true);
        setCodeStatus('success');
      })
      .catch(() => {
        setCodeStatus('error');
        setTimeout(() => {
          setCodeStatus('beforeTry');
          setCode('');
        }, 2000);
      });
  };

  const handleParticipateTeam = async () => {
    await MeetingAPI.joinGroup('TRIPLE', code, true)
      .then(() => {
        setIsModal(false);
        setPageState({ verified: true });
      })
      .catch(error => {
        if (error.response.data.code === 'M17') {
          toast.error(
            '동일한 성별끼리만 신청 가능합니다!\n' +
              '이전 신청단계에서 확인해주세요!',
            {
              icon: '🥲',
            },
          );
        }
      });
  };

  useEffect(() => {
    const input = inputRef.current;
    !!input && input.focus();
  }, [inputRef]);

  useEffect(() => {
    if (code.length === 4) {
      handleEnterCode();
    }
  }, [code, setCode]);

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
          <S.Code codeStatus={codeStatus} active={!!code && code.length === 1}>
            {code?.[0]}
          </S.Code>
          <S.Code codeStatus={codeStatus} active={!!code && code.length === 2}>
            {code?.[1]}
          </S.Code>
          <S.Code codeStatus={codeStatus} active={!!code && code.length === 3}>
            {code?.[2]}
          </S.Code>
          <S.Code codeStatus={codeStatus} active={!!code && code.length === 4}>
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
          label={handleStatusMessage()}
          color={codeStatus === 'error' ? 'Red200' : 'Primary500'}
          typography={'NeoButtonS'}
        />
      </Col>
      <ParticipationModal
        isActive={isModal}
        label={teamInfo?.teamName}
        currentParticipant={teamInfo.userList.length}
        maxParticipant={3}
        cancelButtonClicked={() => {
          setIsModal(false);
          setCodeStatus('beforeTry');
          setCode('');
        }}
        joinButtonClicked={handleParticipateTeam}
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
  Code: styled.div<{ active: boolean; codeStatus: string }>`
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

    ${({ codeStatus }) =>
      codeStatus === 'error' &&
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
