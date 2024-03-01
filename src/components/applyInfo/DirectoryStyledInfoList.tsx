import IconButton from '../buttons/iconButton/IconButton';
import Col from '../layout/Col';
import Paddler from '../layout/Pad';
import Row from '../layout/Row';
import Text from '../typography/Text';

export type DirectoryItemViewType = {
  name: string;
  content: string;
};

type ListComponentProps = { items: DirectoryItemViewType[] };

type ItemComponentProps = DirectoryItemViewType;

const DirectoryStyledInfoItem = ({ name, content }: ItemComponentProps) => {
  return (
    <Col gap={8}>
      <Row gap={4} align="center">
        <IconButton iconName="directory/directory" format="png" />
        <Text color="SubBlue" typography="GoThicTitleS" label={name} />
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

const DirectoryStyledInfoList = ({ items }: ListComponentProps) => {
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
