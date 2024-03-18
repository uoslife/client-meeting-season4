import { DirectoryViewItemType } from '~/components/applyInfo/DirectoryViewInfoList';
import { GroupApplyInfo, PersonalApplyInfo } from '~/models/meeting';

export type GroupPreferRawDataType = Pick<
  GroupApplyInfo,
  'groupPrefer_age' | 'groupPrefer_atmosphere' | 'groupPrefer_univ'
>;

export type PersonalPreferRawDataType = Pick<
  PersonalApplyInfo,
  | 'personalPrefer_age'
  | 'personalPrefer_animal'
  | 'personalPrefer_drink'
  | 'personalPrefer_height'
  | 'personalPrefer_mbti'
  | 'personalPrefer_studentType'
  | 'personalPrefer_smoking'
  | 'personalPrefer_univ'
>;

export type PreferViewDataType = {
  directoryViewItems: DirectoryViewItemType[];
};
