import { css } from '@emotion/react';
import { colors } from '~/styles/colors';
import Header from './header/Header';
import SingleCardBody from './body/singleCard/SingleCardBody';
import DoubleCardBody from './body/doubleCard/DoubleCardBody';
import Footer from './footer/Footer';

const PageTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      css={css`
        height: 100vh;
        width: 100vw;

        display: flex;
        flex-direction: column;

        align-items: center;
        background-color: ${colors.Primary500};
      `}>
      {children}
    </div>
  );
};

const PageLayout = Object.assign(PageTemplate, {
  SingleCardBody,
  DoubleCardBody,
  Header,
  Footer,
});

export default PageLayout;
