import { lazy, Suspense } from 'react';

type lazyLoadRouteProps = {
  componentType: 'common' | 'personal' | 'group';
  componentName: string;
};

const LazyLoadRoute = ({
  componentType,
  componentName,
}: lazyLoadRouteProps) => {
  const LazyComponent = lazy(
    () => import(`../pages/${componentType}/${componentName}/Step`),
  );

  return {
    path: `/${componentType}/${componentName}`,
    element: (
      <Suspense fallback="Loading...">
        <LazyComponent />
      </Suspense>
    ),
  };
};

export default LazyLoadRoute;
