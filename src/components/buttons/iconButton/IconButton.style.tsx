import { IconButtonProps } from '~/components/buttons/iconButton/IconButton';
import styled from '@emotion/styled';

type StyledProps = Omit<IconButtonProps, 'iconName'>;

export const Wrapper = styled.button<StyledProps>`
  all: unset;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transform: rotate(${({ rotate }) => rotate}deg);
`;
