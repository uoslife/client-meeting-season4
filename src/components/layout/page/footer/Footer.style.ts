import styled from '@emotion/styled';
import { FooterPropsType } from './Footer';
import { colors } from '~/styles/colors';
import { css } from '@emotion/react';

type SOuterProps = Pick<FooterPropsType, 'outerPadding'>;
type SInnerProps = Pick<
  FooterPropsType,
  | 'innerPadding'
  | 'backgroundColorName'
  | 'bottomBorderRadius'
  | 'horizontalBorder'
>;

const S = {
  Outer: styled.footer<SOuterProps>`
    z-index: 999;
    width: 100%;

    position: fixed;
    bottom: 5px;
    left: 0;

    background: transparent;
    padding: ${({ outerPadding }) => outerPadding};
  `,
  Inner: styled.footer<SInnerProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: ${({ innerPadding }) => innerPadding};
    ${({ backgroundColorName }) =>
      backgroundColorName &&
      css`
        background: ${colors[backgroundColorName]};
      `}

    ${({ horizontalBorder }) =>
      horizontalBorder &&
      css`
        border-left: ${horizontalBorder};
        border-right: ${horizontalBorder};
      `}

      ${({ bottomBorderRadius }) =>
      bottomBorderRadius &&
      css`
        border-bottom-left-radius: ${bottomBorderRadius}px;
        border-bottom-right-radius: ${bottomBorderRadius}px;
      `}
  `,
};

export default S;
