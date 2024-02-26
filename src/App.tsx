// src\App.tsx

import GlobalStyle from '~/styles/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import { Router } from '~/routes';
import { DevTools } from 'jotai-devtools';

function App() {
  return (
    <>
      <GlobalStyle />
      <DevTools position={'top-left'} />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
