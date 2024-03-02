import { TopCardProps } from '~/components/applyInfo/CustomDoubleCard';
import { GroupApplyInfo } from '~/store/meeting';

type GroupInfoRawData = Pick<
  GroupApplyInfo,
  | 'info_question'
  | 'info_age'
  | 'info_gender'
  | 'info_studentType'
  | 'info_height'
  | 'info_name'
  | 'info_kakaoId'
  | 'info_preferDay'
  | 'info_nickname'
  | 'info_major'
> & { univ: 'HUFS' | 'KHU' | 'UOS' };

type GroupInfoViewData = TopCardProps;

const convertGroupInfoRawIntoView = (
  {
    info_age,
    info_gender,
    info_studentType,
    info_kakaoId,
    info_nickname,
    info_preferDay,
    info_question,
    info_major,
  }: GroupInfoRawData,
  options?: { itemsIncludeKakaoId?: boolean },
): GroupInfoViewData => {
  return {
    cardTopLabel: '우리 팅 정보',
    profileProps: {
      meetingType: 'group',
      genderAndAgeLabel: `(${info_gender === '여자' ? '♀' : '♂'}), ${info_age}세(평균 나이)`,
      nameLabel: info_nickname,
      otherInfoItems: [
        {
          name: '학교',
          content: 'TEMP, TEMP, TEMP(교체 필요)',
        },
        {
          name: '학과',
          content: `${info_major}(교체 필요)`,
        },
        {
          name: '신분',
          content: `${info_studentType}(교체 필요)`,
        },
        {
          name: '선호 요일',
          content: info_preferDay.join(', '),
        },
        // kakaoId 추가
        ...(options?.itemsIncludeKakaoId
          ? [
              {
                name: '카카오톡 ID',
                content: info_kakaoId,
              },
            ]
          : []),
      ],
    },
    directoryViewItems: [
      {
        name: 'Q&A. 분위기',
        content: info_question[0].label,
      },
      {
        name: 'Q&A. 미팅',
        content: info_question[1].label,
      },
      {
        name: 'Q&A. 술',
        content: info_question[2].label,
      },
      {
        name: 'Q&A. 미팅 동기',
        content: info_question[3].label,
      },
    ],
  };
};

export default convertGroupInfoRawIntoView;
