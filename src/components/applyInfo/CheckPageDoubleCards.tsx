import Card, { CardStyleProps } from '../card/Card';
import CardConnector from '../card/connectedTwoCards/CardConnector';
import Col from '../layout/Col';
import Text from '../typography/Text';
import ApplyInfoProfile, { ProfileViewData } from './ApplyInfoProfile';
import DirectoryViewInfoList, {
  DirectoryViewItemType,
} from './DirectoryViewInfoList';

const cardStyleProps: CardStyleProps = {
  padding: '32px 20px 24px',
  backgroundColorName: 'White',
  borderColorName: 'Gray200',
  borderRadius: 21,
  borderWidth: 1,
};

type TopCardProps = {
  profileViewData: ProfileViewData;
  cardTopLabel: string;
  directoryViewItems: DirectoryViewItemType[];
};

type BottomCardProps = { directoryViewItems: DirectoryViewItemType[] };

export type CheckPageDoubleCardsProps = {
  topCardProps: TopCardProps;
  bottomCardProps: BottomCardProps;
};

const TopCard = ({
  directoryViewItems,
  cardTopLabel,
  profileViewData,
}: TopCardProps) => (
  <Card {...cardStyleProps}>
    <Col gap={20}>
      <Col gap={12}>
        <Text
          color="Secondary900"
          label={cardTopLabel}
          typography="NeoTitleM"
        />
        <ApplyInfoProfile {...profileViewData} />
      </Col>
      <DirectoryViewInfoList items={directoryViewItems} />
    </Col>
  </Card>
);

const BottomCard = ({ directoryViewItems }: BottomCardProps) => (
  <Card {...cardStyleProps}>
    <Col gap={12}>
      <Text color="Secondary900" label="선호 사항" typography="NeoTitleM" />
      <DirectoryViewInfoList items={directoryViewItems} />
    </Col>
  </Card>
);

const CheckPageDoubleCards = ({
  topCardProps,
  bottomCardProps,
}: CheckPageDoubleCardsProps) => {
  return (
    <Col align="center">
      <TopCard {...topCardProps} />
      <CardConnector />
      <BottomCard {...bottomCardProps} />
    </Col>
  );
};

export default CheckPageDoubleCards;
