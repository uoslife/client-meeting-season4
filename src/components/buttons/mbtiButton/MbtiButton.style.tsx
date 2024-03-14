import styled from '@emotion/styled';
import { colors } from '~/styles/colors';
import { MbtiButtonProps } from './MbtiButton';

type StyledProps = Pick<MbtiButtonProps, 'width' | 'height' | 'status'>;

export const Button = styled.button<StyledProps>`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 8px;
  padding: 10px 10px;
  border: 1px solid ${colors.Primary500};
  border-radius: 10px;
  width: ${({ width }) => (width === 'full' ? '100%' : `${width}px`)};
  height: ${({ height }) => `${height}px`};
  background-color: ${({ status }) =>
    status === 'active' ? colors.Primary500 : colors.White};
  transition: 0.5s;
`;
