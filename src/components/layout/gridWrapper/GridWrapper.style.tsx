import styled from '@emotion/styled';
import { GridProps } from './GridWrapper';

export const Container = styled.div<GridProps>`
  display: grid;
  grid-template-rows: repeat(${props => props.row}, 1fr);
  grid-template-columns: repeat(${props => props.column}, 1fr);
  grid-row-gap: ${props => props.rowGap}px;
  grid-column-gap: 0;
  justify-items: center;
  width: 100%;
`;
