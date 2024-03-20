import { useAtomValue, useSetAtom } from 'jotai';
import { commonDataAtoms } from '~/models/common/data';
import { useEffect, useState } from 'react';
import { MeetingAPI } from '~/api';
import ApplyInfo from '~/components/applyInfo/ApplyInfo';
import Col from '~/components/layout/Col';
import Paddler from '~/components/layout/Pad';
import PageLayout from '~/components/layout/page/PageLayout';
import { ApplyInfoCustomDoubleCardProps } from '~/components/applyInfo/CustomDoubleCard';
import { pageFinishAtom } from '~/models/funnel';

const useCardState = (meetingType: 'personal' | 'group') => {
  const [meetingInfoState, setMeetingInfoState] = useState<
    ApplyInfoCustomDoubleCardProps | 'loading' | 'error'
  >('loading');

  const setIsPageFinished = useSetAtom(pageFinishAtom);

  useEffect(() => {
    setIsPageFinished(false);

    setTimeout(() => {
      (async () => {
        try {
          const {
            data: { data },
          } = await MeetingAPI.getMeetingInfo(
            meetingType === 'group' ? 'TRIPLE' : 'SINGLE',
          );
          // TODO: 실제 데이터로 교체
          const {
            teamName,
            teamType,
            // teamUserList,
            // gender,
            information: {
              questions: {
                additionalProp1: q1,
                additionalProp2: q2,
                additionalProp3: q3,
                additionalProp4: q4,
                additionalProp5: q5,
              },
            },
            preference: {
              ageMax: preferAgeMax,
              ageMin: preferAgeMin,
              heightMax: preferHeightMax,
              heightMin: preferHeightMin,
              mood: preferMood,
              religion: preferReligion,
              smoking: preferSmoking,
              spiritAnimal: preferSpiritAnimal,
              mbti: preferMbti,
              studentType: preferStudentType,
              university: preferUniversity,
            },
          } = data;

          if (teamType === 'TRIPLE') {
            setMeetingInfoState({
              topCardProps: {
                cardTopLabel: '우리팅 정보',
                directoryViewItems: [
                  { name: 'Q&A. 분위기', content: preferMood! },
                  {
                    name: 'Q&A. 미팅',
                    // content: ['TEMP_ANSWER1', 'TEMP_ANSWER2', 'TEMP_ANSWER3'][q1],
                    content: '',
                  },
                  {
                    name: 'Q&A. 술',
                    content: '',
                    // content: ['TEMP_ANSWER1', 'TEMP_ANSWER2', 'TEMP_ANSWER3'][q2],
                  },
                  {
                    name: 'Q&A. 미팅 동기',
                    content: '',
                    // content: ['TEMP_ANSWER1', 'TEMP_ANSWER2', 'TEMP_ANSWER3'][q3],
                  },
                  { name: '우리의 메세지', content: 'TEMP' },
                ],
                profileViewData: {
                  univ: 'UOS',
                  genderAndAgeLabel: 'TEMP',
                  meetingType: 'group',
                  nameLabel: teamName!,
                  otherInfoItems: [
                    { name: '학교', content: '서울시립대' },
                    {
                      name: '학과',
                      content: '경영학과, 디자인과, 중국어문화학과',
                    },
                    {
                      name: '신분',
                      content: '재학생, 재학생, 재학생',
                    },
                    { name: '선호 요일', content: '월, 화, 수' },
                    {
                      name: '카카오톡 ID',
                      content: 'uoslife, qwer1234, hellohello',
                    },
                  ],
                },
              },
              bottomCardProps: {
                directoryViewItems: [
                  { name: '나이', content: '23-27' },
                  { name: '선호 대학', content: '경희대' },
                  { name: '분위기', content: '둘 다 좋아요!' },
                ],
              },
            });
          } else {
            setMeetingInfoState({
              topCardProps: {
                cardTopLabel: '내 정보',
                profileViewData: {
                  univ: 'UOS',
                  genderAndAgeLabel: '(♀), 23세',
                  meetingType: 'personal',
                  nameLabel: '이루매',
                  otherInfoItems: [
                    { name: '키', content: '155cm' },
                    { name: '학교', content: '서울시립대' },
                    { name: '학과', content: '디자인학과' },
                    { name: '신분', content: '학부생' },
                    { name: '카카오톡 ID', content: 'uoslife' },
                  ],
                },
                directoryViewItems: [
                  { name: '흡연 여부', content: '흡연' },
                  { name: '음주 횟수', content: '1달에 0회' },
                  { name: '동물상 및 MBTI', content: '고양이 / ENFJ' },
                  { name: '관심사', content: '독서, 여행, 운동' },
                  { name: '나의 메시지', content: '저는 임어진을 좋아해요.' },
                  {
                    name: 'Q&A. 연애 스타일',
                    content: '편한 ㄴr의 연인,,, 친구같은 ㄴㅏ으1 연인,,,',
                  },
                  {
                    name: 'Q&A. 데이트',
                    content: 'ㅈi대 뽀ㄷH나는 곳에서 맛난거 먹ㅈㅑ',
                  },
                  {
                    name: 'Q&A. 화해 방법',
                    content: '나에게 시간을 조금만 줘 Honey,,,',
                  },
                  {
                    name: 'Q&A. 연락 빈도',
                    content: 'ㅅıㅅi콜콜 일상을 공유ㅎr고 싶ㅇㅓ',
                  },
                  {
                    name: 'Q&A. 표현 방법',
                    content: '말ㅎr지 않아도 내 ㅁㅏ음이 느껴지지 않ㅇr？',
                  },
                ],
              },
              bottomCardProps: {
                directoryViewItems: [
                  {
                    name: '나이 / 키',
                    content: '23-27 / 165-175',
                  },
                  {
                    name: '신분',
                    content: '학부생, 대학원생, 졸업생',
                  },
                  { name: '선호 대학', content: '경희대, 한국외대' },
                  {
                    name: '흡연 여부 / 음주 횟수',
                    content: '비흡연 / 1달에 2-7회',
                  },
                  {
                    name: '동물상 및 MBTI',
                    content: '고양이 / E, I, S, N, T, F, J, P',
                  },
                ],
              },
            });
          }
          setIsPageFinished(true);
        } catch (error) {
          setMeetingInfoState('error');
        }
      })();
    }, 3000);
  }, [meetingType]);

  return meetingInfoState;
};

const FirstPage = () => {
  const { meetingType } = useAtomValue(
    commonDataAtoms.commonBranchGatewayStep.page1,
  );

  const cardState = useCardState(meetingType!);

  // TODO: 대신 보여줄 UI 확정 후 수정
  if (cardState === 'error') return null;
  if (cardState === 'loading') return null;

  return (
    <PageLayout.SingleCardBody theme="BG_GREY" cardPadding="8px 0 80px">
      <Paddler left={5} right={5} top={24}>
        <Col gap={16}>
          <ApplyInfo.CheckPageTopSaying />
          <ApplyInfo.CustomDoubleCard {...cardState} />
        </Col>
      </Paddler>
    </PageLayout.SingleCardBody>
  );
};

export default FirstPage;
