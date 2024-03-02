import { DirectoryItemViewType } from '~/components/applyInfo/DirectoryStyledInfoList';
import { GroupApplyInfo } from '~/store/meeting';

export type GroupPreferRawData = Pick<
  GroupApplyInfo,
  'prefer_age' | 'prefer_atmosphere' | 'prefer_major'
>;
export type GroupPreferViewData = {
  directoryStyledInfoItems: DirectoryItemViewType[];
};

const convertGroupPreferRawIntoView = ({
  prefer_age,
  prefer_atmosphere,
  prefer_major,
}: GroupPreferRawData): GroupPreferViewData => {
  return {
    directoryStyledInfoItems: [
      {
        name: '나이',
        content: prefer_age.join(', '),
      },
      {
        name: '선호 대학',
        content: `${prefer_major}?(교체 필요)`,
      },
      {
        name: '분위기',
        content: prefer_atmosphere,
      },
    ],
  };
};

export default convertGroupPreferRawIntoView;