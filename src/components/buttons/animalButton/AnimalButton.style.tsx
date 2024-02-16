import styled from '@emotion/styled';
import { AnimalButtonProps } from './AnimalButton';
import { colors } from '~/styles/colors';

type StyledProps = Pick<AnimalButtonProps, 'isActive'>;

export const Container = styled.button<StyledProps>`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  border-radius: 12px;
  padding: 0px;
  background-color: white;

  &:active {
    background-color: ${colors.Gray000};
  }

  /* 이후 시간 나면 backdrop-filter 구현 */
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  margin-bottom: 8px;
`;
