import { DirectoryItemViewType } from '~/components/applyInfo/DirectoryStyledInfoList';
import { ProfileInfoItemType } from '~/components/applyInfo/Profile';
import { GroupApplyInfo } from '~/store/meeting';

export type GroupInfoRawData = Pick<
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
  // TODO: 학교 타입 추가
>;

export type GroupInfoViewData = {
  profileGenderAndAgeLabel: string;
  profileNameLabel: string;
  profileLabelItems: ProfileInfoItemType[];
  directoryStyledInfoItems: DirectoryItemViewType[];
};

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
    profileGenderAndAgeLabel: `(${info_gender === '여자' ? '♀' : '♂'}), ${info_age}세(평균 나이)`,
    directoryStyledInfoItems: [
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
    profileLabelItems: [
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
    profileNameLabel: info_nickname,
  };
};

export default convertGroupInfoRawIntoView;
