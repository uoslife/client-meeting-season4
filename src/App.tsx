import GlobalStyle from '~/styles/GlobalStyle';
import { css } from '@emotion/react';

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
          MainPage
        </div>
      </GlobalStyle>
    </>
  );
}

export default App;
