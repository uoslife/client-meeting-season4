import styled from '@emotion/styled';
import { FooterPropsType } from './Footer';
import { colors } from '~/styles/colors';
import { css } from '@emotion/react';

type SOuterProps = Pick<FooterPropsType, 'outerPadding'>;
type SInnerProps = Pick<
  FooterPropsType,
  'innerPadding' | 'backgroundColorName' | 'borderRadius' | 'border'
>;

const S = {
  Outer: styled.div<SOuterProps>`
    z-index: 999;
    width: 100%;

    position: fixed;
    bottom: 0;
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

    ${({ border }) =>
      border &&
      css`
        border: ${border};
      `}
  `,
};

export default S;
