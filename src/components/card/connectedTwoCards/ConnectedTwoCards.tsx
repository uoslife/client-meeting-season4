import Col from '~/components/layout/Col';
import Card, { CardProps } from '../Card';
import CardConnector from './CardConnector';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export type ConnectedTwoCardsProps = {
  topCardProps: CardProps;
  bottomCardProps: CardProps;
};

const ConnectedTwoCards = ({
  topCardProps,
  bottomCardProps,
}: ConnectedTwoCardsProps) => {
  return (
    <Col align="center">
      <Card key={0} {...topCardProps} />
      <S.ConnectorWrapper>
        <CardConnector />
      </S.ConnectorWrapper>
      <div
        css={css`
          background-color: blue;
          height: 0;
          flex: 1;
        `}>
        <Card key={1} {...bottomCardProps}>
          {bottomCardProps.children}
        </Card>
      </div>
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
