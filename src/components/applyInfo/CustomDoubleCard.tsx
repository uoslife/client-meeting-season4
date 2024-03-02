import CardConnector from '../card/connectedTwoCards/CardConnector';
import Col from '../layout/Col';
import Text from '../typography/Text';
import ApplyInfo from './ApplyInfo';
import { DirectoryViewItemType } from './DirectoryViewInfoList';
import { ProfileProps } from './Profile';

export type TopCardProps = {
  profileProps: ProfileProps;
  cardTopLabel: string;
  directoryViewItems: DirectoryViewItemType[];
};

const TopCard = ({
  directoryViewItems,
  cardTopLabel,
  profileProps,
}: TopCardProps) => (
  <ApplyInfo.StyledCard>
    <Col gap={20}>
      <Col gap={12}>
        <Text
          color="Secondary900"
          label={cardTopLabel}
          typography="NeoTitleM"
        />
        <ApplyInfo.Profile {...profileProps} />
      </Col>
      <ApplyInfo.List items={directoryViewItems} />
    </Col>
  </ApplyInfo.StyledCard>
);

export type BottomCardProps = {
  directoryViewItems: DirectoryViewItemType[];
};

const BottomCard = ({ directoryViewItems }: BottomCardProps) => (
  <ApplyInfo.StyledCard>
    <Col gap={12}>
      <Text color="Secondary900" label="선호 사항" typography="NeoTitleM" />
      <ApplyInfo.List items={directoryViewItems} />
    </Col>
  </ApplyInfo.StyledCard>
);

export type ApplyInfoCustomDoubleCardProps = {
  topCardProps: TopCardProps;
  bottomCardProps: BottomCardProps;
};

/** 신청정보 확인 페이지(신청 전/후)에서 쓰이는 컴포넌트 */
const ApplyInfoCustomDoubleCard = ({
  topCardProps,
  bottomCardProps,
}: ApplyInfoCustomDoubleCardProps) => (
  <Col align="center">
    <TopCard {...topCardProps} />
    <CardConnector />
    <BottomCard {...bottomCardProps} />
  </Col>
);

export default ApplyInfoCustomDoubleCard;
