// src\App.tsx

import GlobalStyle from '~/styles/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import { Router } from '~/routes';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
