import Card, { CardStyleProps } from '../card/Card';
import DirectoryViewInfoList from './DirectoryViewInfoList';
import CheckPageTopSaying from './CheckPageTopSayings';
import Profile from './Profile';
import ApplyInfoCustomDoubleCard from './CustomDoubleCard';

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
  List: DirectoryViewInfoList,
  CustomDoubleCard: ApplyInfoCustomDoubleCard,
  StyledCard,
  CheckPageTopSaying,
  Profile,
};

export default ApplyInfo;
