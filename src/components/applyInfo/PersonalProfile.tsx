import styled from '@emotion/styled';
import Row from '../layout/Row';
import Col from '../layout/Col';
import Text from '../typography/Text';
import ProfileInfoItems, { ProfileInfoItemType } from './ProfileInfoItems';

export type PersonalProfileProps = {
  nicknameLabel: string;
  genderAndAgeLabel: string;
  otherLabels: ProfileInfoItemType[];
};

/** 좌측에 프로필 사진(?), 우측에 키와 학교 등 개인정보 */
const PersonalProfile = ({
  genderAndAgeLabel,
  nicknameLabel,
  otherLabels,
}: PersonalProfileProps) => {
  return (
    <Row gap={16}>
      <S.LeftBox />
      <Col gap={8}>
        <Row gap={4} align="center">
          <Text color="SubBlue" label={nicknameLabel} typography="NeoBodyM" />
          <Text
            color="Gray300"
            label={genderAndAgeLabel}
            typography="PFLabelS"
          />
        </Row>
        <ProfileInfoItems items={otherLabels} />
      </Col>
    </Row>
  );
};

export default PersonalProfile;

const S = {
  // TODO: 일러스트(확정 후)로 대체
  LeftBox: styled.div`
    height: 142px;
    width: 142px;
    background-color: red;
  `,
};
