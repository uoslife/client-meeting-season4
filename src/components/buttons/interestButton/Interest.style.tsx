import styled from '@emotion/styled';
import { InterestButtonProps } from './Interest';
import { colors } from '~/styles/colors';

type StyledProps = Pick<InterestButtonProps, 'isActive'>;

export const Container = styled.button`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  padding: 0px;
  background-color: white;
`;

export const ImageWrapper = styled.div<StyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 90px;
  margin-bottom: 8px;
  border-radius: 50%;

  &:active {
    background-color: ${colors.Primary400};
  }

  background-color: ${props =>
    props.isActive ? colors.Primary500 : colors.Primary200};

  /* 이후 시간 나면 backdrop-filter 구현 */
`;
