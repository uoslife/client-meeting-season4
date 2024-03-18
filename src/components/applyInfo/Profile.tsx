import styled from '@emotion/styled';
import Col from '../layout/Col';
import Row from '../layout/Row';
import Text from '../typography/Text';
import { Univ } from '~/models/options';

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

export type ProfileViewData = {
  univ: Univ;
  meetingType: 'personal' | 'group';
  nameLabel: string;
  genderAndAgeLabel: string;
  otherInfoItems: ProfileInfoItemType[];
};

const Profile = ({
  univ,
  meetingType,
  genderAndAgeLabel,
  nameLabel,
  otherInfoItems,
}: ProfileViewData) => {
  console.log({ univ });
  switch (meetingType) {
    case 'personal':
      return (
        <Row gap={16}>
          <S.PersonalLeftImage
            src={`/images/common/checkApplyInfoStep/${univ}.png`}
          />
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
          <S.GroupTopImage
            src={`/images/common/checkApplyInfoStep/group.png`}
          />
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
  PersonalLeftImage: styled.img`
    height: 142px;
    width: 142px;
  `,
  GroupTopImage: styled.img`
    height: 192px;
    width: 100%;
    background-color: red;
  `,
};
