import { DirectoryItemViewType } from '~/components/applyInfo/DirectoryStyledInfoList';
import { ProfileInfoItemType } from '~/components/applyInfo/Profile';
import { PersonalApplyInfo } from '~/store/meeting';

export type PersonalInfoRawData = Pick<
  PersonalApplyInfo,
  | 'info_age'
  | 'info_gender'
  | 'info_height'
  | 'info_major'
  | 'info_studentType'
  | 'info_kakaoId'
  | 'info_nickname'
  | 'info_smoking'
  | 'info_drink'
  | 'info_interests'
  | 'info_animal'
  | 'info_mbti'
  | 'info_question'
> & { univ: 'HUFS' | 'KHU' | 'UOS' };

export type GroupInfoViewData = {
  profileGenderAndAgeLabel: string;
  profileNameLabel: string;
  profileLabelItems: ProfileInfoItemType[];
  directoryStyledInfoItems: DirectoryItemViewType[];
};

const convertPersonalInfoRawIntoView = (
  {
    info_age,
    info_gender,
    info_height,
    info_kakaoId,
    info_major,
    info_nickname,
    info_studentType,
    info_animal,
    info_drink,
    info_interests,
    info_mbti,
    info_question,
    info_smoking,
    univ,
  }: PersonalInfoRawData,
  options?: { itemsIncludeKakaoId?: boolean },
): GroupInfoViewData => {
  return {
    profileNameLabel: info_nickname,
    profileGenderAndAgeLabel: `(${info_gender === '여자' ? '♀' : '♂'}), ${info_age}세(평균 나이)`,
    profileLabelItems: [
      {
        name: '키',
        content: `${info_height}cm (보강 필요)`,
      },
      {
        name: '학교',
        content: {
          HUFS: '한국외대',
          KHU: '경희대',
          UOS: '서울시립대',
        }[univ],
      },
      {
        name: '학과',
        content: info_major,
      },
      {
        name: '신분',
        content: info_studentType,
      },
      ...(options?.itemsIncludeKakaoId
        ? [
            {
              name: '카카오톡 ID',
              content: info_kakaoId,
            },
          ]
        : []),
    ],
    directoryStyledInfoItems: [
      {
        name: '흡연 여부',
        content: info_smoking,
      },
      {
        name: '음주 횟수',
        content: `${info_drink[0]} ~ ${info_drink[1]} 회(보강 필요)`,
      },
      {
        name: '동물상 및 MBTI',
        content: `${info_animal} / ${info_mbti}`,
      },
      {
        name: '관심사',
        content: info_interests.join(', '),
      },
      {
        name: 'Q&A. 연애 스타일',
        content: info_question[0].label,
      },
      {
        name: 'Q&A. 데이트',
        content: info_question[1].label,
      },
      {
        name: 'Q&A. 화해 방법',
        content: info_question[2].label,
      },
      {
        name: 'Q&A. 연락 빈도',
        content: info_question[3].label,
      },
      {
        name: 'Q&A. 표현 방법',
        content: info_question[4].label,
      },
    ],
  };
};

export default convertPersonalInfoRawIntoView;
