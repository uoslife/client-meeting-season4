import GlobalStyle from '~/styles/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import { Router } from '~/routes';
import { DevTools } from 'jotai-devtools';
import { useEffect } from 'react';
import { SilentLogin } from '~/utils/silentLogin';

function App() {
  const silentRefresh = new SilentLogin();
  useEffect(() => {
    silentRefresh.onSilentRefresh();
  }, []);

  return (
    <>
      <GlobalStyle />
      <DevTools position={'top-right'} />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
