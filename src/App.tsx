import GlobalStyle from '~/styles/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import { Router } from '~/routes';
import { DevTools } from 'jotai-devtools';
import { useEffect } from 'react';
import { SilentLogin } from '~/utils/silentLogin';
import { isUosUserAtom } from '~/models/auth';
import { useAtomValue } from 'jotai';
function App() {
  const silentRefresh = new SilentLogin();
  const isUosUserValue = useAtomValue(isUosUserAtom);

  useEffect(() => {
    if (isUosUserValue) {
      setTimeout(silentRefresh.reLoginForUosUser, 3600 * 1000 * 2);
      return;
    }
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
