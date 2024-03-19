import { Route, Routes, useLocation } from 'react-router-dom';
import commonRoutes from '~/routes/commonRoutes';
import groupRoutes from '~/routes/groupRoutes';
import personalRoutes from '~/routes/personalRoutes';
import { ReactElement } from 'react';
import { AnimatePresence } from 'framer-motion';

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
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        {getRoutes(routesList)}
      </Routes>
    </AnimatePresence>
  );
};

export type Pathname = (typeof routesList)[number]['path'];
