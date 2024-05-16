import GlobalStyle from '~/styles/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import { Router } from '~/routes';
import { DevTools } from 'jotai-devtools';
import { useEffect } from 'react';
import { SilentLogin } from '~/utils/silentLogin';
import { isLoggedInAtom, isUosUserAtom } from '~/models/auth';
import { useAtomValue } from 'jotai';
function App() {
  const silentRefresh = new SilentLogin();
  const isUosUserValue = useAtomValue(isUosUserAtom);
  const isLoggedInValue = useAtomValue(isLoggedInAtom);

  useEffect(() => {
    console.log(isLoggedInValue);
    if (isUosUserValue) {
      setTimeout(silentRefresh.reLoginForUosUser, 3600 * 1000 * 2);
      return;
    }
    silentRefresh.onSilentRefresh();
  }, []);

  return (
    <>
      <GlobalStyle />
      <DevTools position={'bottom-left'} />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
