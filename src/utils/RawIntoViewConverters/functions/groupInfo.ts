import { RawIntoViewConverterType } from '..';

const convertGroupInfoRawIntoView: RawIntoViewConverterType['groupInfo'] = (
  {
    myInfo_age,
    myInfo_gender,
    myInfo_studentType,
    myInfo_kakaoId,
    myInfo_nickname,
    groupInfo_preferDay,
    groupInfo_question,
    myInfo_major,
    univ,
  },
  options,
) => ({
  cardTopLabel: '우리 팅 정보',
  profileProps: {
    meetingType: 'group',
    genderAndAgeLabel: `(${myInfo_gender === '여자' ? '♀' : '♂'}), ${myInfo_age}세(평균 나이)`,
    nameLabel: myInfo_nickname,
    otherInfoItems: [
      {
        name: '학교',
        content: univ,
      },
      {
        name: '학과',
        content: `${myInfo_major}(조정 필요)`,
      },
      {
        name: '신분',
        content: `${myInfo_studentType}(조정 필요)`,
      },
      {
        name: '선호 요일',
        content: groupInfo_preferDay.join(', '),
      },
      // kakaoId 추가
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
      name: 'Q&A. 분위기',
      content: groupInfo_question[0].label,
    },
    {
      name: 'Q&A. 미팅',
      content: groupInfo_question[1].label,
    },
    {
      name: 'Q&A. 술',
      content: groupInfo_question[2].label,
    },
    {
      name: 'Q&A. 미팅 동기',
      content: groupInfo_question[3].label,
    },
  ],
});

export default convertGroupInfoRawIntoView;
