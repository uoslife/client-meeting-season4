import Card, { CardStyleProps } from '../card/Card';
import DirectoryStyledInfoList from './DirectoryStyledInfoList';
import GroupProfile from './GroupProfile';
import PersonalProfile from './PersonalProfile';
import CheckPageTopSaying from './CheckPageTopSayings';

const cardStyle: CardStyleProps = {
  padding: '32px 20px 24px',
  backgroundColorName: 'White',
  borderColorName: 'Gray200',
  borderRadius: 21,
  borderWidth: 1,
};

const StyledCard = ({ children }: { children: React.ReactNode }) => (
  <Card {...cardStyle}>{children}</Card>
);

const ApplyInfo = {
  List: DirectoryStyledInfoList,
  GroupProfile,
  PersonalProfile,
  StyledCard,
  CheckPageTopSaying,
};

export default ApplyInfo;
