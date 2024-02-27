import styled from '@emotion/styled';
import { colors } from '~/styles/colors';
import { RoundButtonProps } from './RoundButton';
import { css } from '@emotion/react';

type StyledProps = Omit<RoundButtonProps, 'label'>;

export const Button = styled.button<StyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 18px;
  flex-shrink: 0;
  height: ${({ height }) => `${height}px`};
  width: ${({ width }) => `${width}px`};
  border: 1px solid ${({ borderType }) => checkBorderType(borderType)};
  border-radius: ${({ borderType }) => (borderType === 'sky' ? 6 : 10)}px;
  transition: 0.5s;

  ${({ status }) => checkStatusType(status)}
`;

const checkBorderType = (borderType: RoundButtonProps['borderType']) => {
  switch (borderType) {
    case 'primary':
      return `${colors.Primary500}`;
    case 'black':
      return `${colors.Gray500}`;
    case 'sky':
      return `${colors.Primary200}`;
    default:
      return null;
  }
};

const checkStatusType = (status: RoundButtonProps['status']) => {
  switch (status) {
    case 'active':
      return css`
        background-color: ${colors.Primary500};
        color: ${colors.White};
      `;
    case 'inactive':
      return css`
        background-color: ${colors.White};
        color: ${colors.Primary500};
      `;
    case 'disabled':
      return css`
        background-color: ${colors.Primary200};
        color: ${colors.White};
      `;
    default:
      return '';
  }
};
