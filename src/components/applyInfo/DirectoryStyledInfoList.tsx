import IconButton from '../buttons/iconButton/IconButton';
import Col from '../layout/Col';
import Paddler from '../layout/Pad';
import Row from '../layout/Row';
import Text from '../typography/Text';

export type DirectoryItemViewType = {
  name: string;
  content: string;
};

export type DirectoryStyledInfoListProps = { items: DirectoryItemViewType[] };

type ItemComponentProps = DirectoryItemViewType;

const DirectoryStyledInfoItem = ({ name, content }: ItemComponentProps) => {
  return (
    <Col gap={8}>
      <Row gap={6} align="center">
        <IconButton iconName="directory/directory" format="png" />
        <Paddler top={4}>
          <Text color="SubBlue" typography="GoThicTitleS" label={name} />
        </Paddler>
      </Row>
      <Paddler left={16}>
        <Row gap={16}>
          <IconButton iconName="directory/directory-connector" format="png" />
          <Text color="Gray500" typography="GoThicBodyS" label={content} />
        </Row>
      </Paddler>
    </Col>
  );
};

const DirectoryStyledInfoList = ({ items }: DirectoryStyledInfoListProps) => {
  return (
    <Col gap={16}>
      {items.map((item, index) => (
        <DirectoryStyledInfoItem
          key={index}
          name={item.name}
          content={item.content}
        />
      ))}
    </Col>
  );
};

export default DirectoryStyledInfoList;
