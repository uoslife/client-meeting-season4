import styled from '@emotion/styled';
import Col from '../layout/Col';
import Row from '../layout/Row';
import Text from '../typography/Text';
import ProfileInfoItems, { ProfileInfoItemType } from './ProfileInfoItems';

type GroupProfileProps = {
  groupNameLabel: string;
  genderAndAgeLabel: string;
  otherLabels: ProfileInfoItemType[];
};

const GroupProfile = ({
  genderAndAgeLabel,
  groupNameLabel,
  otherLabels,
}: GroupProfileProps) => {
  return (
    <Col gap={12}>
      <S.TopBox />
      <Col gap={8}>
        <Row gap={4} align="center">
          <Text color="SubBlue" label={groupNameLabel} typography="NeoBodyM" />
          <Text
            color="Gray300"
            label={genderAndAgeLabel}
            typography="PFLabelS"
          />
        </Row>
        <ProfileInfoItems items={otherLabels} />
      </Col>
    </Col>
  );
};

export default GroupProfile;

const S = {
  // TODO: 들어갈 일러스트 확정되면 대체
  TopBox: styled.div`
    height: 192px;
    width: 100%;
    background-color: red;
  `,
};
