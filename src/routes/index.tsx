import { Route, Routes } from 'react-router-dom';
import commonRoutes from '~/routes/commonRoutes';
import groupRoutes from '~/routes/groupRoutes';
import personalRoutes from '~/routes/personalRoutes';
import { ReactElement } from 'react';

type RouteType = {
  path: string;
  element: ReactElement;
  children?: RouteType[];
};

const routesList = [...commonRoutes, ...groupRoutes, ...personalRoutes];

const getRoutes = (routes: RouteType[]) => {
  return routes.map((route: RouteType) => (
    <Route key={route.path} path={route.path} element={route.element}>
      {route.children && getRoutes(route.children)}
    </Route>
  ));
};

export const Router = () => {
  return <Routes>{getRoutes(routesList)}</Routes>;
};
