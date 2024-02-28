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

const Card = ({ children, scroll, padding, ...styleProps }: CardProps) => {
  return (
    <S.Outer padding={padding} scroll={scroll} {...styleProps}>
      <S.Inner scroll={scroll}>{children}</S.Inner>
    </S.Outer>
  );
};

export default Card;

type SWrapperProps = Pick<
  CardProps,
  | 'backgroundColorName'
  | 'borderColorName'
  | 'borderRadius'
  | 'borderWidth'
  | 'padding'
  | 'scroll'
  | 'padding'
>;

const S = {
  Outer: styled.div<SWrapperProps>`
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
  `,
  Inner: styled.div<Pick<CardProps, 'scroll'>>`
    ${({ scroll }) =>
      scroll &&
      css`
        height: 100%;
        overflow-y: auto;
      `}

    height: 100%;
    padding: 36px 20px;

    display: flex;
    flex-direction: column;
  `,
};
