import styled from '@emotion/styled';
import Col from '../layout/Col';
import Row from '../layout/Row';
import Text from '../typography/Text';

export type ProfileInfoItemType = { name: string; content: string };

const ProfileInfoItems = ({ items }: { items: ProfileInfoItemType[] }) => {
  return (
    <Col gap={2}>
      {items.map((item, index) => (
        <Row key={index} gap={4}>
          <Text
            color="Gray500"
            label={`${item.name} : `}
            typography="GoThicTitleS"
            weight={600}
          />
          <Text
            color="Gray300"
            label={item.content}
            typography="GoThicTitleS"
            weight={400}
          />
        </Row>
      ))}
    </Col>
  );
};

export type ProfileProps = {
  meetingType: 'personal' | 'group';
  nameLabel: string;
  genderAndAgeLabel: string;
  otherInfoItems: ProfileInfoItemType[];
};

const Profile = ({
  meetingType,
  genderAndAgeLabel,
  nameLabel,
  otherInfoItems,
}: ProfileProps) => {
  switch (meetingType) {
    case 'personal':
      return (
        <Row gap={16}>
          <S.PersonalLeftImage />
          <Col gap={8}>
            <Row gap={4} align="center">
              <Text color="SubBlue" label={nameLabel} typography="NeoBodyM" />
              <Text
                color="Gray300"
                label={genderAndAgeLabel}
                typography="PFLabelS"
              />
            </Row>
            <ProfileInfoItems items={otherInfoItems} />
          </Col>
        </Row>
      );

    case 'group':
      return (
        <Col gap={12}>
          <S.GroupTopImage />
          <Col gap={8}>
            <Row gap={4} align="center">
              <Text color="SubBlue" label={nameLabel} typography="NeoBodyM" />
              <Text
                color="Gray300"
                label={genderAndAgeLabel}
                typography="PFLabelS"
              />
            </Row>
            <ProfileInfoItems items={otherInfoItems} />
          </Col>
        </Col>
      );
  }
};

export default Profile;

const S = {
  // TODO: 일러스트(확정 후)로 대체
  PersonalLeftImage: styled.div`
    height: 142px;
    width: 142px;
    background-color: red;
  `,
  // TODO: 일러스트(확정 후)로 대체
  GroupTopImage: styled.div`
    height: 192px;
    width: 100%;
    background-color: red;
  `,
};
