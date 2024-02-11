import styled from '@emotion/styled';
import { colors } from '~/styles/colors';
import { colorType } from '~/types/style.type';

export type CardStyleProps = {
  backgroundColor: colorType;
  borderColor: colorType;
  borderWidth: number;
  borderRadius: number;
};

type CardProps = {
  children: React.ReactNode;
} & CardStyleProps;

const Card = ({ children, ...styleProps }: CardProps) => {
  return <S.Wrapper {...styleProps}>{children}</S.Wrapper>;
};

export default Card;

const S = {
  Wrapper: styled.div<CardStyleProps>`
    border: solid ${({ borderColor }) => colors[borderColor]};
    border-radius: ${({ borderRadius }) => borderRadius}px;
    border-width: ${({ borderWidth }) => borderWidth}px;

    background-color: ${({ backgroundColor }) => colors[backgroundColor]};
    width: 100%;
  `,
};
