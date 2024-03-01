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

export default ProfileInfoItems;
