import { InfoViewDataType } from '~/utils/RawIntoViewConverters/types/info.type';
import CardConnector from '../card/connectedTwoCards/CardConnector';
import Col from '../layout/Col';
import Text from '../typography/Text';
import ApplyInfo from './ApplyInfo';
import { PreferViewDataType } from '~/utils/RawIntoViewConverters/types/prefer.type';

type TopCardProps = InfoViewDataType;

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
      <ApplyInfo.DirectoryViewInfoList items={directoryViewItems} />
    </Col>
  </ApplyInfo.StyledCard>
);

type BottomCardProps = PreferViewDataType;

const BottomCard = ({ directoryViewItems }: BottomCardProps) => (
  <ApplyInfo.StyledCard>
    <Col gap={12}>
      <Text color="Secondary900" label="선호 사항" typography="NeoTitleM" />
      <ApplyInfo.DirectoryViewInfoList items={directoryViewItems} />
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
