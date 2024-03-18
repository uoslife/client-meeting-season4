import { DirectoryViewItemType } from '~/components/applyInfo/DirectoryViewInfoList';
import { ProfileViewData } from '~/components/applyInfo/Profile';
import { GroupApplyInfo, PersonalApplyInfo } from '~/models/meeting';

export type GroupInfoRawDataType = Pick<
  GroupApplyInfo,
  | 'groupInfo_question'
  | 'myInfo_age'
  | 'myInfo_gender'
  | 'myInfo_studentType'
  | 'myInfo_height'
  | 'groupInfo_name'
  | 'myInfo_kakaoId'
  | 'groupInfo_preferDay'
  | 'myInfo_nickname'
  | 'myInfo_major'
> & { univ: 'HUFS' | 'KHU' | 'UOS' };

export type PersonalInfoRawDataType = Pick<
  PersonalApplyInfo,
  | 'myInfo_age'
  | 'myInfo_gender'
  | 'myInfo_height'
  | 'myInfo_major'
  | 'myInfo_studentType'
  | 'myInfo_kakaoId'
  | 'myInfo_nickname'
  | 'personalInfo_smoking'
  | 'personalInfo_drink'
  | 'personalInfo_interests'
  | 'personalInfo_animal'
  | 'personalInfo_mbti'
  | 'personalInfo_question'
> & { univ: 'HUFS' | 'KHU' | 'UOS' };

export type InfoViewDataType = {
  profileViewData: ProfileViewData;
  cardTopLabel: string;
  directoryViewItems: DirectoryViewItemType[];
};
