import { Outlet } from 'react-router-dom';

const commonRoutes = [
  {
    path: '/',
    element: <div>initPage</div>,
  },
  {
    path: '/sub',
    element: <Outlet />,
    children: [
      {
        path: 'dummy',
        element: <div>dummy</div>,
      },
    ],
  },
  {
    path: '*',
    element: <div>페이지를 찾을 수 없어요!</div>,
  },
];

export default commonRoutes;
