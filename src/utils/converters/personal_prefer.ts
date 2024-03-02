import { BottomCardProps } from '~/components/applyInfo/CustomDoubleCard';
import { PersonalApplyInfo } from '~/store/meeting';

type PersonalPreferRawData = Pick<
  PersonalApplyInfo,
  | 'prefer_age'
  | 'prefer_animal'
  | 'prefer_drink'
  | 'prefer_height'
  | 'prefer_mbti'
  | 'prefer_studentType'
  | 'prefer_smoking'
  | 'prefer_univ'
>;

type PersonalPreferViewData = BottomCardProps;

const convertPersonalPreferRawIntoView = ({
  prefer_age,
  prefer_animal,
  prefer_drink,
  prefer_height,
  prefer_mbti,
  prefer_smoking,
  prefer_studentType,
  prefer_univ,
}: PersonalPreferRawData): PersonalPreferViewData => {
  return {
    directoryViewItems: [
      {
        name: '나이 / 키',
        content: `${prefer_age[0]}-${prefer_age[1]}세 / ${prefer_height[0]}-${prefer_height[1]}cm`,
      },
      {
        name: '신분',
        content: prefer_studentType.join(', '),
      },
      {
        name: '선호 대학',
        content: prefer_univ.join(', '),
      },
      {
        name: '흡연 여부 / 음주 횟수',
        content: `${prefer_smoking} / 1달에 ${prefer_drink[0]}-${prefer_drink[1]}회`,
      },
      {
        name: '동물상 및 MBTI',
        content: `${prefer_animal} / ${prefer_mbti.join(', ')}`,
      },
    ],
  };
};

export default convertPersonalPreferRawIntoView;
