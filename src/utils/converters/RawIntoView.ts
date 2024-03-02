import convertGroupInfoRawIntoView from './group_info';
import convertGroupPreferRawIntoView from './group_prefer';
import convertPersonalInfoRawIntoView from './personal_info';
import convertPersonalPreferRawIntoView from './personal_prefer';

// Raw data from API or atom -> View data for components
const RawIntoView = {
  group_info: convertGroupInfoRawIntoView,
  group_prefer: convertGroupPreferRawIntoView,
  personal_info: convertPersonalInfoRawIntoView,
  personal_prefer: convertPersonalPreferRawIntoView,
};

export default RawIntoView;
