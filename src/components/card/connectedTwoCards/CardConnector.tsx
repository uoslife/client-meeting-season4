import styled from '@emotion/styled';
import Row from '~/components/layout/Row';

const PairOfRings = () => (
  <S.PairContainer>
    <S.Ring />
    <S.Ring />
  </S.PairContainer>
);

const CardConnector = () => {
  return (
    <Row justify="space-between">
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
  PairContainer: styled.div`
    display: flex;
    gap: 4px;
  `,
};
