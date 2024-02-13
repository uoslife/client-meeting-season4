import * as S from './GridWrapper.style';

export type GridProps = {
  row: number;
  column: number;
  rowGap: number;
  children?: React.ReactNode;
};

const GridWrapper = ({ row, column, rowGap, children }: GridProps) => {
  return (
    <S.Container row={row} column={column} rowGap={rowGap}>
      {children}
    </S.Container>
  );
};

export default GridWrapper;
