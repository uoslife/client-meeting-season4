import GlobalStyle from '~/styles/GlobalStyle';
import { css } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from '~/routes';

function App() {
  return (
    <>
      <GlobalStyle>
        <div
          css={css`
            width: 414px;
            height: 100dvh;
            background-color: white;
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
