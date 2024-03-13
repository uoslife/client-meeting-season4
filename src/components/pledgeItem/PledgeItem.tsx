import { colors } from '~/styles/colors';
import Col from '../layout/Col';
import Row from '../layout/Row';
import { css } from '@emotion/react';
import Text from '../typography/Text';
import Checkbox from '../buttons/checkbox/Checkbox';

const PledgeItem = ({
  title,
  content,
  checked,
  onClick,
}: {
  title: string;
  content: string;
  checked: boolean;
  onClick?: () => void;
}) => (
  <Col
    padding="20px"
    style={{
      backgroundColor: `${colors['Gray000']}`,
      border: `1px solid ${colors['Gray200']}`,
      borderRadius: '6px',
    }}>
    <Row align={'center'} gap={12}>
      <Col
        gap={14}
        css={css`
          width: calc(100% - 36px);
        `}>
        <Text label={title} color={'Gray500'} typography={'GoThicTitleS'} />
        <Text
          label={content}
          color={'Gray500'}
          typography={'GoThicBodyS'}
          css={css`
            text-align: start;
          `}
        />
      </Col>
      <Checkbox checked={checked} onClick={onClick} />
    </Row>
  </Col>
);

export default PledgeItem;
