import GlobalStyle from '~/styles/GlobalStyle';
import { css } from '@emotion/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import commonRoutes from '~/routes/commonRoutes';

const getRoutes = (routes: any) => {
  return routes.map((route: any, i: any) => (
    <Route key={route.path} path={route.path} element={route.element}>
      {route.children && getRoutes(route.children)}
    </Route>
  ));
};
const Router = () => {
  return <Routes>{getRoutes(commonRoutes)}</Routes>;
};

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
