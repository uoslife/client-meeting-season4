import { RawIntoViewConverterType } from '..';

const convertGroupPreferRawIntoView: RawIntoViewConverterType['groupPrefer'] =
  ({ groupPrefer_age, groupPrefer_atmosphere, groupPrefer_univ }) => ({
    directoryViewItems: [
      {
        name: '나이',
        content: groupPrefer_age.join(', '),
      },
      {
        name: '선호 대학',
        content: `${groupPrefer_univ.join(', ')}?(교체 필요)`,
      },
      {
        name: '분위기',
        content: groupPrefer_atmosphere,
      },
    ],
  });

export default convertGroupPreferRawIntoView;
