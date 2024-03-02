import { GroupInfoViewData } from '~/utils/converters/group_info';
import CardConnector from '../card/connectedTwoCards/CardConnector';
import Col from '../layout/Col';
import Text from '../typography/Text';
import ApplyInfo from './ApplyInfo';
import { DirectoryItemViewType } from './DirectoryStyledInfoList';
import { ProfileInfoItemType } from './Profile';

type TopCardProps = {
  meetingType: 'personal' | 'group';
} & GroupInfoViewData;

const TopCard = ({
  directoryStyledInfoItems,
  meetingType,
  profileGenderAndAgeLabel,
  profileLabelItems,
  profileNameLabel,
}: TopCardProps) => {
  const cardTopLabel = meetingType === 'personal' ? '내 정보' : '우리 팅 정보';

  return (
    <ApplyInfo.StyledCard>
      <Col gap={20}>
        <Col gap={12}>
          <Text
            color="Secondary900"
            label={cardTopLabel}
            typography="NeoTitleM"
          />
          <ApplyInfo.Profile
            meetingType={meetingType}
            genderAndAgeLabel={profileGenderAndAgeLabel}
            nameLabel={profileNameLabel}
            otherLabels={profileLabelItems}
          />
        </Col>
        <ApplyInfo.List items={directoryStyledInfoItems} />
      </Col>
    </ApplyInfo.StyledCard>
  );
};

type BottomCardProps = {
  directoryStyledInfoItems: DirectoryItemViewType[];
};

const BottomCard = ({ directoryStyledInfoItems }: BottomCardProps) => {
  return (
    <ApplyInfo.StyledCard>
      <Col gap={12}>
        <Text color="Secondary900" label="선호 사항" typography="NeoTitleM" />
        <ApplyInfo.List items={directoryStyledInfoItems} />
      </Col>
    </ApplyInfo.StyledCard>
  );
};

export type CustomDoubleCardProps = {
  meetingType: 'personal' | 'group';
  profileGenderAndAgeLabel: string;
  profileNameLabel: string;
  profileLabelItems: ProfileInfoItemType[];
  topCardItems: DirectoryItemViewType[];
  bottomCardItems: DirectoryItemViewType[];
};

/** 신청정보 확인 페이지(신청 전/후)에서 쓰이는 컴포넌트 */
const CustomDoubleCard = ({
  bottomCardItems,
  topCardItems,
  meetingType,
  profileGenderAndAgeLabel,
  profileLabelItems,
  profileNameLabel,
}: CustomDoubleCardProps) => {
  const topCardProps: TopCardProps = {
    profileGenderAndAgeLabel,
    profileNameLabel: profileNameLabel,
    profileLabelItems,
    meetingType,
    directoryStyledInfoItems: topCardItems,
  };

  const bottomCardProps: BottomCardProps = {
    directoryStyledInfoItems: bottomCardItems,
  };

  return (
    <Col align="center">
      <TopCard {...topCardProps} />
      <CardConnector />
      <BottomCard {...bottomCardProps} />
    </Col>
  );
};

export default CustomDoubleCard;
