import Card, { CardStyleProps } from '../card/Card';
import DirectoryStyledInfoList from './DirectoryStyledInfoList';
import CheckPageTopSaying from './CheckPageTopSayings';
import CustomDoubleCard from './CustomDoubleCard';
import Profile from './Profile';

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
  StyledCard,
  CheckPageTopSaying,
  CustomDoubleCard,
  Profile,
};

export default ApplyInfo;
