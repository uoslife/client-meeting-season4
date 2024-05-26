import GlobalStyle from '~/styles/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import { Router } from '~/routes';
import { DevTools } from 'jotai-devtools';
import { useEffect } from 'react';
import { SilentLogin } from '~/utils/silentLogin';
import { isUosUserAtom } from '~/models/auth';
import { useAtomValue } from 'jotai';
import { Toaster } from 'react-hot-toast';

function App() {
  const silentRefresh = new SilentLogin();
  const isUosUserValue = useAtomValue(isUosUserAtom);

  useEffect(() => {
    if (isUosUserValue) {
      setTimeout(silentRefresh.reLoginForUosUser, 3600 * 1000 * 2);
      return;
    }
    silentRefresh.onSilentRefreshV2();
  }, []);

  return (
    <>
      <GlobalStyle />
      <DevTools position={'bottom-left'} />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
