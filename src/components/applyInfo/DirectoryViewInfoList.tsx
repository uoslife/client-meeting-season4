import IconButton from '../buttons/iconButton/IconButton';
import Col from '../layout/Col';
import Paddler from '../layout/Pad';
import Row from '../layout/Row';
import Text from '../typography/Text';

export type DirectoryViewItemType = {
  name: string;
  content: string;
};

export type DirectoryViewInfoListProps = {
  items: DirectoryViewItemType[];
};

type ItemComponentProps = DirectoryViewItemType;

const DirectoryViewInfoItem = ({ name, content }: ItemComponentProps) => {
  return (
    <Col gap={8}>
      <Row gap={6} align="center">
        <IconButton iconName="directory/directory" format="png" />
        <Paddler top={4}>
          <Text
            align="left"
            color="SubBlue"
            typography="GoThicTitleS"
            label={name}
          />
        </Paddler>
      </Row>
      <Paddler left={16}>
        <Row gap={16}>
          <IconButton iconName="directory/directory-connector" format="png" />
          <Text
            align="left"
            color="Gray500"
            typography="GoThicBodyS"
            label={content}
          />
        </Row>
      </Paddler>
    </Col>
  );
};

const DirectoryViewInfoList = ({ items }: DirectoryViewInfoListProps) => {
  return (
    <Col gap={16}>
      {items.map((item, index) => (
        <DirectoryViewInfoItem
          key={index}
          name={item.name}
          content={item.content}
        />
      ))}
    </Col>
  );
};

export default DirectoryViewInfoList;
