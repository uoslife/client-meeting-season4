import Col from '~/components/layout/Col';
import Text from '~/components/typography/Text';
import { css, keyframes } from '@emotion/react';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { Dispatch, useEffect } from 'react';
import { colors } from '~/styles/colors';
import Row from '~/components/layout/Row';
import IconButton from '~/components/buttons/iconButton/IconButton';
import styled from '@emotion/styled';
import { groupDataAtoms } from '~/models/group/data';
import { pageFinishAtom } from '~/models/funnel';
import { combinedValidatiesAtoms } from '~/models';
import ApplicationModal from '~/components/modal/applicationModal/ApplicationModal';
import { MeetingAPI } from '~/api';

type SecondPageProps = {
  onPrev: () => void;
  isModal: boolean;
  setIsModal: Dispatch<boolean>;
};

const SecondPage = ({ isModal, setIsModal, onPrev }: SecondPageProps) => {
  const [page1State, setPage1State] = useAtom(
    groupDataAtoms.groupLeaderGroupCreateStep.page1,
  );
  const { teamName } = page1State;
  const [page2State, setPage2State] = useAtom(
    groupDataAtoms.groupLeaderGroupCreateStep.page2,
  );
  const { joinCode, otherMembers } = page2State;
  const enteredMemberNumber = otherMembers.filter(item => item !== null).length;

  const handleUserList = async () => {
    await MeetingAPI.getGroupStatus('TRIPLE', joinCode!).then(res => {
      const data = res.data.userList.map(val => val.name);
      const otherMembersFixed: [string | null, string | null, string | null] = [
        data[0] || null,
        data[1] || null,
        data[2] || null,
      ];
      setPage1State(prev => ({
        ...prev,
        teamName: res.data.teamName,
      }));
      setPage2State(prev => ({
        ...prev,
        otherMembers: otherMembersFixed,
      }));
    });
  };

  useEffect(() => {
    if (enteredMemberNumber === 3) return;
    handleUserList();
    const interval = setInterval(() => {
      handleUserList();
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [setPage2State]);

  const setIsPageFinished = useSetAtom(pageFinishAtom);
  const pageValidity = useAtomValue(combinedValidatiesAtoms)
    .groupLeaderGroupCreateStep.page2;
  setIsPageFinished(pageValidity);

  return (
    <>
      <Col align={'center'} gap={24} padding={'36px 20px'}>
        <Col gap={12} align={'center'}>
          <Text
            label={joinCode ?? '팅 코드 생성 중입니다'}
            color={'Gray500'}
            typography={'NeoTitleM'}
            size={60}
            css={css`
              line-height: 140%; /* 84px */
              letter-spacing: 8px;
            `}
          />
          <Text
            label={'팅 코드를 팅원에게 공유해 주세요'}
            color={'Gray500'}
            typography={'NeoTitleM'}
          />
          <Text
            label={'모든 인원이 입장을 완료해야해요.'}
            color={'Gray500'}
            typography={'GoThicTitleS'}
          />
          <Text
            label={
              '뒤로 가기를 누르시면, \n' + '생성 중인 팅이 자동으로 삭제돼요.'
            }
            color={'Gray400'}
            typography={'GoThicBodyS'}
            css={css`
              text-align: center;
            `}
          />
        </Col>
        <div
          css={css`
            border: 1px solid ${colors.Gray100};
            width: 100%;
          `}
        />
        <Col align={'center'} gap={8}>
          <Text
            label={'팅 이름'}
            color={'Gray500'}
            typography={'GoThicBodyS'}
          />
          <Text
            label={`" ${teamName} "`}
            color={'Gray500'}
            typography={'NeoTitleM'}
          />
        </Col>
        <Col gap={6}>
          <Row align={'center'} justify={'space-between'} gap={8}>
            <Row align={'center'} gap={5}>
              {enteredMemberNumber === 3 ? (
                <img src="/images/icons/checkbox-check.png" width={20} />
              ) : (
                <S.Loader />
              )}
              <Text
                label={
                  enteredMemberNumber === 3 ? '팅 결성 완료!' : '팅 결성 대기중'
                }
                color={'Gray400'}
                typography={'GoThicTitleS'}
              />
            </Row>
            <Row
              align={'center'}
              justify={'flex-end'}
              gap={4}
              padding={'0 16px  0 0 '}>
              <IconButton
                iconName={'participationModal-human'}
                width={15}
                height={15}
              />
              <Text
                label={`${otherMembers.filter(item => item !== null).length}/3`}
                color={'Gray400'}
                typography={'PFLabelL'}
              />
            </Row>
          </Row>
          <S.TeamJoinStatus>
            <Col gap={24}>
              {otherMembers.map((memberName, index) => {
                return (
                  <Row key={`${memberName} + ${index}`}>
                    <Row align={'center'} gap={8}>
                      <IconButton
                        iconName={'human-circle'}
                        width={20}
                        height={20}
                      />
                      <Text
                        label={memberName ?? ''}
                        color={'Gray500'}
                        typography={'GoThicTitleS'}
                      />
                    </Row>
                    <Row align={'center'} justify={'flex-end'} gap={8}>
                      <Text
                        label={memberName !== null ? '입장완료' : '미입장'}
                        color={memberName !== null ? 'Primary500' : 'Gray200'}
                        typography={'GoThicBodyS'}
                      />
                      <IconButton
                        iconName={
                          memberName !== null
                            ? 'checkCircle-active'
                            : 'checkCircle-inactive'
                        }
                        width={20}
                        height={20}
                      />
                    </Row>
                  </Row>
                );
              })}
            </Col>
          </S.TeamJoinStatus>
        </Col>
      </Col>
      <ApplicationModal
        isActive={isModal}
        mainLabel={'이전 단계로 가시면 기존의 팅은 삭제됩니다!'}
        subLabel={'기존 팅에 참가한 팅원은 새로운 만들 팅에 다시 참여해주세요'}
        cancelButtonClicked={() => setIsModal(false)}
        joinButtonClicked={async () => {
          await MeetingAPI.deleteMeeting('TRIPLE', true).then(() => {
            setIsModal(false);
            setTimeout(() => {
              setPage2State(prev => ({
                ...prev,
                otherMembers: [null, null, null],
              }));
              onPrev();
            }, 500);
          });
        }}
      />
    </>
  );
};

export default SecondPage;

const spinner = keyframes`
  0% {
    transform: rotate(0deg);
    border: 2px solid #0000ffff;
    border-top: 2px solid #fff;
  }
  50% {
    transform: rotate(720deg);
    border: 2px solid #00ff77ff;
    border-top: 2px solid #fff;
  }
  100% {
    transform: rotate(1440deg);
    border: 2px solid #0000ffff;
    border-top: 2px solid #fff;
  }
`;

const S = {
  TeamJoinStatus: styled.div`
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: center;
    width: 100%;
    border-radius: 12px;
    border: 1px solid ${colors.Gray300};
    background: ${colors.Gray50};
  `,
  Loader: styled.div`
    border-radius: 50%;
    width: 14px;
    height: 14px;
    animation: ${spinner} 2s cubic-bezier(0.77, 0.26, 0.29, 0.79) infinite;
    margin: 10px;
  `,
};
