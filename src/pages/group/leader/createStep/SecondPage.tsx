import Col from '~/components/layout/Col';
import Text from '~/components/typography/Text';
import { css } from '@emotion/react';
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
  const { name } = useAtomValue(
    groupDataAtoms.groupLeaderMyInformationStep.page1,
  );
  const { teamName } = useAtomValue(
    groupDataAtoms.groupLeaderGroupCreateStep.page1,
  );
  const [pageState, setPageState] = useAtom(
    groupDataAtoms.groupLeaderGroupCreateStep.page2,
  );
  const { joinCode, otherMembers } = pageState;

  useEffect(() => {
    setPageState(prev => ({
      ...prev,
      otherMembers: ['김팅원', '박팅원'],
    }));
  }, [setPageState]);

  const entireTeamMembers: (string | null)[] = [name, ...otherMembers];

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
              '팅 결성 전에 페이지를 떠나거나 코드를 재발급하는 경우, \n' +
              '생성 중인 팅이 자동으로 삭제돼요.'
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
            <Row align={'center'} padding={'0 0 0 30px'}>
              <Text
                label={'팅 결성 대기중'}
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
              <Text label={'1/3'} color={'Gray400'} typography={'PFLabelL'} />
            </Row>
          </Row>
          <S.TeamJoinStatus>
            <Col gap={24}>
              {entireTeamMembers.map((memberName, index) => {
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
        mainLabel={'뒤로 돌아가시면 기존의 팅은 삭제됩니다!'}
        subLabel={'기존 팅에서 참가한 팅원은 새로운 팅원에 다시 참여해주세요'}
        cancelButtonClicked={() => setIsModal(false)}
        joinButtonClicked={async () => {
          await MeetingAPI.deleteMeeting('TRIPLE', true).then(() => {
            setIsModal(false);
            setTimeout(() => onPrev(), 500);
          });
        }}
      />
    </>
  );
};

export default SecondPage;

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
};
