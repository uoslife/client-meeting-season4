import styled from '@emotion/styled';
import { colors } from '~/styles/colors';
import { colorType } from '~/types/style.type';

export type CardStyleProps = {
  backgroundColorName: colorType;
  borderColorName: colorType;
  borderWidth: number;
  borderRadius: number;
};

export type CardProps = {
  children: React.ReactNode;
} & CardStyleProps;

const Card = ({ children, ...styleProps }: CardProps) => {
  return <S.Wrapper {...styleProps}>{children}</S.Wrapper>;
};

export default Card;

const S = {
  Wrapper: styled.div<CardStyleProps>`
    border: solid ${({ borderColorName }) => colors[borderColorName]};
    border-radius: ${({ borderRadius }) => borderRadius}px;
    border-width: ${({ borderWidth }) => borderWidth}px;

    background-color: ${({ backgroundColorName }) =>
      colors[backgroundColorName]};
    width: 100%;
  `,
};
