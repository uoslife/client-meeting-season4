import convertGroupInfoRawIntoView from './functions/groupInfo';
import convertGroupPreferRawIntoView from './functions/groupPrefer';
import {
  GroupInfoRawDataType,
  InfoViewDataType,
  PersonalInfoRawDataType,
} from './types/info.type';
import convertPersonalInfoRawIntoView from './functions/personalInfo';
import convertPersonalPreferRawIntoView from './functions/personalPrefer';
import {
  GroupPreferRawDataType,
  PersonalPreferRawDataType,
  PreferViewDataType,
} from './types/prefer.type';

export type RawIntoViewConverterType = {
  groupInfo: (
    data: GroupInfoRawDataType,
    options?: { itemsIncludeKakaoId?: boolean },
  ) => InfoViewDataType;
  groupPrefer: (data: GroupPreferRawDataType) => PreferViewDataType;
  personalInfo: (
    data: PersonalInfoRawDataType,
    options?: { itemsIncludeKakaoId?: boolean },
  ) => InfoViewDataType;
  personalPrefer: (data: PersonalPreferRawDataType) => PreferViewDataType;
};

// Raw data from API or atom -> View data for components
const RawIntoViewConverters: RawIntoViewConverterType = {
  groupInfo: convertGroupInfoRawIntoView,
  groupPrefer: convertGroupPreferRawIntoView,
  personalInfo: convertPersonalInfoRawIntoView,
  personalPrefer: convertPersonalPreferRawIntoView,
};

export default RawIntoViewConverters;
