import Col from '~/components/layout/Col';
import Card, { CardStyleProps } from '../Card';
import CardConnector from './CardConnector';
import styled from '@emotion/styled';

export type ConnectedTwoCardsProps = {
  topCardChildren: React.ReactNode;
  bottomCardChildren: React.ReactNode;
  cardStyleProps: CardStyleProps;
};

const ConnectedTwoCards = ({
  topCardChildren,
  bottomCardChildren,
  cardStyleProps,
}: ConnectedTwoCardsProps) => {
  return (
    <Col align="center">
      <Card {...cardStyleProps}>{topCardChildren}</Card>
      <S.ConnectorWrapper>
        <CardConnector />
      </S.ConnectorWrapper>
      <Card {...cardStyleProps}>{bottomCardChildren}</Card>
    </Col>
  );
};

export default ConnectedTwoCards;

const S = {
  ConnectorWrapper: styled.div`
    padding: 0 10%;
    width: 100%;
    margin: -11px;
    z-index: 999;
  `,
};
