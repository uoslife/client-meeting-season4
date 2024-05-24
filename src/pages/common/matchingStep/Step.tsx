import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { MeetingAPI } from '~/api';
import { GetMatchingInfoResponse } from '~/api/types/user.type';
import MatchingFailedContent from '~/components/applyInfo/MatchingFailedContent';
import MatchingSuccessfulContent, {
  MatchingSuccessfulContentProps,
} from '~/components/applyInfo/MatchingSuccessfulContent';
import PageLayout from '~/components/layout/page/PageLayout';
import { MatchingSuccessfulResultInfo } from '~/utils/meetingInfo/result';

const DUMMY_API_MOCK_SINGLE: GetMatchingInfoResponse = {
  myName: '임어진',
  opponnentUserInformation: {
    teamName: 'mock-유저이름',
    teamType: 'SINGLE',
    gender: 'MALE',
    teamUserList: [
      {
        phoneNumber: '010-2939-3923',
        name: '이루매',
        age: 24,
        religion: 'ETC',
        university: 'UOS',
        department: '경제학과',
        studentType: 'UNDERGRADUATE',
        kakaoTalkId: 'kakaoId',
        smoking: 'TRUE',
        drinkingMin: 0,
        drinkingMax: 10,
        spiritAnimal: ['DOG'],
        mbti: 'ISFP',
        interest: ['BOOK'],
        height: 155.7,
      },
    ],
    information: {
      gender: 'FEMALE',
      questions: [0, 0, 0, 0, 0],
    },
    preference: {
      ageMin: 20,
      ageMax: 25,
      heightMin: 130,
      heightMax: 180,
      drinkingMin: 0,
      drinkingMax: 38,
      mood: 'ACTIVE',
      studentType: ['UNDERGRADUATE'],
      university: ['UOS'],
      religion: ['CHRISTIAN'],
      smoking: 'TRUE',
      spiritAnimal: ['DOG'],
      mbti: 'EINTP',
    },
    message: '안뇽안뇽안뇽안뇽안뇽안뇽안뇽안뇽',
  },
};

const DUMMY_API_MOCK_TEAM: GetMatchingInfoResponse = {
  myName: '',
  opponnentUserInformation: {
    teamName: 'mock-팀이름',
    teamType: 'TRIPLE',
    gender: 'MALE',
    teamUserList: [
      {
        phoneNumber: '010-2939-3923',
        name: '이루매',
        age: 24,
        religion: 'ETC',
        university: 'UOS',
        department: '경제학과',
        studentType: 'UNDERGRADUATE',
        kakaoTalkId: 'kakaoId',
        smoking: 'TRUE',
        drinkingMin: 10,
        drinkingMax: 130,
        spiritAnimal: ['DOG'],
        mbti: 'ISFP',
        interest: ['BOOK'],
        height: 155.7,
      },
      {
        phoneNumber: '010-2939-3923',
        name: '이루매',
        age: 24,
        religion: 'ETC',
        university: 'UOS',
        department: '경제학과',
        studentType: 'UNDERGRADUATE',
        kakaoTalkId: 'kakaoId',
        smoking: 'TRUE',
        drinkingMin: 0,
        drinkingMax: 12,
        spiritAnimal: ['DOG'],
        mbti: 'ISFP',
        interest: ['BOOK'],
        height: 180,
      },
      {
        phoneNumber: '010-2939-3923',
        name: '이루매',
        age: 24,
        religion: 'ETC',
        university: 'UOS',
        department: '경제학과',
        studentType: 'UNDERGRADUATE',
        kakaoTalkId: 'kakaoId',
        smoking: 'TRUE',
        drinkingMin: 130,
        drinkingMax: 130,
        spiritAnimal: ['DOG'],
        mbti: 'ISFP',
        interest: ['BOOK'],
        height: 230,
      },
    ],
    information: {
      gender: 'MALE',
      questions: [255, 0, 0, 0, 0],
    },
    preference: {
      ageMin: 20,
      ageMax: 25,
      heightMin: 170,
      heightMax: 180,
      drinkingMin: 0,
      drinkingMax: 34,
      mood: 'ACTIVE',
      studentType: ['UNDERGRADUATE'],
      university: ['UOS'],
      religion: ['CHRISTIAN'],
      smoking: 'TRUE',
      spiritAnimal: ['DOG'],
      mbti: 'EINTP',
    },
    message: 'mock-message',
  },
};

const useData = () => {
  const [meetingInfoState, setMeetingInfoState] = useState<
    MatchingSuccessfulContentProps | 'loading' | 'error'
  >('loading');

  useEffect(() => {
    (async () => {
      try {
        // TODO: 목업 데이터를 실제 API 호출 결과로 교체
        // const { data } = await MeetingAPI.getMatchingInfo();

        const convertedUiData = new MatchingSuccessfulResultInfo(
          // DUMMY_API_MOCK_TEAM,
          DUMMY_API_MOCK_SINGLE,
        ).getUiData();
        setMeetingInfoState(convertedUiData);
      } catch (error) {
        setMeetingInfoState('error');
      }
    })();
  }, []);

  return meetingInfoState;
};

const CommonMatchingStep = () => {
  const data = useData();

  if (data === 'error') return null;
  if (data === 'loading')
    return (
      <PageLayout.SingleCardBody theme="BG_WHITE" cardPadding="8px 0">
        <div
          css={css`
            width: 100%;
            height: 80%;
            display: flex;
            justify-content: center;
            align-items: center;
          `}>
          <img
            alt={''}
            src="/images/uoslifeLogo-loadingSpinner.webp"
            width={320}
            height={200}
          />
        </div>
      </PageLayout.SingleCardBody>
    );

  // 매칭 실패 분기처리 필요
  // if (<조건>) return <MatchingFailedContent />;

  return <MatchingSuccessfulContent {...data} />;
};

export default CommonMatchingStep;
