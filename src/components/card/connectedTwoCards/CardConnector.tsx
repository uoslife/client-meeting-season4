import styled from '@emotion/styled';
import Row from '~/components/layout/Row';

const PairOfRings = () => (
  <Row gap={4}>
    <S.Ring />
    <S.Ring />
  </Row>
);

const CardConnector = () => {
  return (
    <Row justify="space-between" width="full">
      <PairOfRings />
      <PairOfRings />
    </Row>
  );
};

export default CardConnector;

const S = {
  Ring: styled.div`
    width: 8px;
    height: 32px;
    background: linear-gradient(180deg, #fff 0%, #cdcdcd 100%);

    border-radius: 21px;
    border: 2px solid #818181;
  `,
};
