import CardConnector from '../card/connectedTwoCards/CardConnector';
import Col from '../layout/Col';
import Text from '../typography/Text';
import ApplyInfo from './ApplyInfo';
import { DirectoryViewItemType } from './DirectoryViewInfoList';
import { ProfileViewData } from './Profile';

type TopCardProps = {
  profileViewData: ProfileViewData;
  cardTopLabel: string;
  directoryViewItems: DirectoryViewItemType[];
};

const TopCard = ({
  directoryViewItems,
  cardTopLabel,
  profileViewData,
}: TopCardProps) => (
  <ApplyInfo.StyledCard>
    <Col gap={20}>
      <Col gap={12}>
        <Text
          color="Secondary900"
          label={cardTopLabel}
          typography="NeoTitleM"
        />
        <ApplyInfo.Profile {...profileViewData} />
      </Col>
      <ApplyInfo.DirectoryViewInfoList items={directoryViewItems} />
    </Col>
  </ApplyInfo.StyledCard>
);

type BottomCardProps = { directoryViewItems: DirectoryViewItemType[] };

const BottomCard = ({ directoryViewItems }: BottomCardProps) => (
  <ApplyInfo.StyledCard>
    <Col gap={12}>
      <Text color="Secondary900" label="선호 사항" typography="NeoTitleM" />
      <ApplyInfo.DirectoryViewInfoList items={directoryViewItems} />
    </Col>
  </ApplyInfo.StyledCard>
);

export type CheckApplyInfoCardsProps = {
  topCardProps: TopCardProps;
  bottomCardProps: BottomCardProps;
};

/** 신청정보 확인 페이지(신청 전/후)에서 쓰이는 컴포넌트 */
const CheckApplyInfoCards = ({
  topCardProps,
  bottomCardProps,
}: CheckApplyInfoCardsProps) => (
  <Col align="center">
    <TopCard {...topCardProps} />
    <CardConnector />
    <BottomCard {...bottomCardProps} />
  </Col>
);

export default CheckApplyInfoCards;
