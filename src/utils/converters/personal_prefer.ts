import { BottomCardProps } from '~/components/applyInfo/CustomDoubleCard';
import { PersonalApplyInfo } from '~/store/meeting';

type PersonalPreferRawData = Pick<
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

type PersonalPreferViewData = BottomCardProps;

const convertPersonalPreferRawIntoView = ({
  personalPrefer_age,
  personalPrefer_animal,
  personalPrefer_drink,
  personalPrefer_height,
  personalPrefer_mbti,
  personalPrefer_smoking,
  personalPrefer_studentType,
  personalPrefer_univ,
}: PersonalPreferRawData): PersonalPreferViewData => {
  return {
    directoryViewItems: [
      {
        name: '나이 / 키',
        content: `${personalPrefer_age[0]}-${personalPrefer_age[1]}세 / ${personalPrefer_height[0]}-${personalPrefer_height[1]}cm`,
      },
      {
        name: '신분',
        content: personalPrefer_studentType.join(', '),
      },
      {
        name: '선호 대학',
        content: personalPrefer_univ.join(', '),
      },
      {
        name: '흡연 여부 / 음주 횟수',
        content: `${personalPrefer_smoking} / 1달에 ${personalPrefer_drink[0]}-${personalPrefer_drink[1]}회`,
      },
      {
        name: '동물상 및 MBTI',
        content: `${personalPrefer_animal} / ${personalPrefer_mbti.join(', ')}`,
      },
    ],
  };
};

export default convertPersonalPreferRawIntoView;
