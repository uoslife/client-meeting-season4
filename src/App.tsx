import GlobalStyle from '~/styles/GlobalStyle';
import { css } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from '~/routes';
import { colors } from '~/styles/colors';

function App() {
  return (
    <>
      <GlobalStyle>
        <div
          css={css`
            width: 414px;
            height: 100dvh;
            background-color: ${colors.Primary500};
            padding: 0 5px;
          `}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </div>
      </GlobalStyle>
    </>
  );
}

export default App;
