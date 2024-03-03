import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors } from '~/styles/colors';
import { colorType } from '~/types/style.type';

export type CardStyleProps = {
  backgroundColorName: colorType;
  borderColorName: colorType;
  borderWidth: number;
  borderRadius: number;
  padding?: string;
};

export type CardProps = {
  children: React.ReactNode;
  scroll?: boolean;
} & CardStyleProps;

const Card = ({
  children,
  scroll,
  padding,
  borderRadius,
  ...styleProps
}: CardProps) => {
  return (
    <S.Outer
      padding={padding}
      scroll={scroll}
      borderRadius={borderRadius}
      {...styleProps}>
      <S.Inner scroll={scroll}>{children}</S.Inner>
    </S.Outer>
  );
};

export default Card;

type SOuterProps = Pick<
  CardProps,
  | 'backgroundColorName'
  | 'borderColorName'
  | 'borderRadius'
  | 'borderWidth'
  | 'padding'
  | 'scroll'
>;

type SInnerProps = Pick<CardProps, 'scroll'>;

const S = {
  Outer: styled.div<SOuterProps>`
    border: solid ${({ borderColorName }) => colors[borderColorName]};
    border-radius: ${({ borderRadius }) => borderRadius}px;
    border-width: ${({ borderWidth }) => borderWidth}px;

    background-color: ${({ backgroundColorName }) =>
      colors[backgroundColorName]};

    width: 100%;

    ${({ scroll }) =>
      scroll &&
      css`
        flex: 1;
        height: 0;
      `}

    ${({ padding }) =>
      padding &&
      css`
        padding: ${padding};
      `}
  `,
  Inner: styled.div<SInnerProps>`
    ${({ scroll }) =>
      scroll &&
      css`
        height: 100%;
        overflow-y: auto;
      `}

    height: 100%;

    display: flex;
    flex-direction: column;
  `,
};
