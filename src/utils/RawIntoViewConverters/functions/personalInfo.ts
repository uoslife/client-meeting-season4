import { RawIntoViewConverterType } from '..';

const convertPersonalInfoRawIntoView: RawIntoViewConverterType['personalInfo'] =
  (
    {
      myInfo_age,
      myInfo_gender,
      myInfo_height,
      myInfo_kakaoId,
      myInfo_major,
      myInfo_nickname,
      myInfo_studentType,
      personalInfo_animal,
      personalInfo_drink,
      personalInfo_interests,
      personalInfo_mbti,
      personalInfo_question,
      personalInfo_smoking,
      univ,
    },
    options?: { itemsIncludeKakaoId?: boolean },
  ) => ({
    cardTopLabel: '내 정보',
    profileProps: {
      meetingType: 'personal',
      genderAndAgeLabel: `(${myInfo_gender === '여자' ? '♀' : '♂'}), ${myInfo_age}세(평균 나이)`,
      nameLabel: myInfo_nickname,
      otherInfoItems: [
        {
          name: '키',
          content: `${myInfo_height}cm (보강 필요)`,
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
          content: myInfo_major,
        },
        {
          name: '신분',
          content: myInfo_studentType,
        },
        ...(options?.itemsIncludeKakaoId
          ? [
              {
                name: '카카오톡 ID',
                content: myInfo_kakaoId,
              },
            ]
          : []),
      ],
    },
    directoryViewItems: [
      {
        name: '흡연 여부',
        content: personalInfo_smoking,
      },
      {
        name: '음주 횟수',
        content: `${personalInfo_drink[0]} ~ ${personalInfo_drink[1]} 회(보강 필요)`,
      },
      {
        name: '동물상 및 MBTI',
        content: `${personalInfo_animal} / ${personalInfo_mbti}`,
      },
      {
        name: '관심사',
        content: personalInfo_interests.join(', '),
      },
      {
        name: 'Q&A. 연애 스타일',
        content: personalInfo_question[0].label,
      },
      {
        name: 'Q&A. 데이트',
        content: personalInfo_question[1].label,
      },
      {
        name: 'Q&A. 화해 방법',
        content: personalInfo_question[2].label,
      },
      {
        name: 'Q&A. 연락 빈도',
        content: personalInfo_question[3].label,
      },
      {
        name: 'Q&A. 표현 방법',
        content: personalInfo_question[4].label,
      },
    ],
  });

export default convertPersonalInfoRawIntoView;
