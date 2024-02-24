import MyInformationStep from '~/pages/personal/myInformationStep';
import MyLovingStyleStep from '~/pages/personal/myLovingStyleStep';

const personalRoutes = [
  {
    path: '/personal/myInformation',
    element: <MyInformationStep />,
  },
  {
    path: '/personal/myLovingStyleStep',
    element: <MyLovingStyleStep />,
  },
];

export default personalRoutes;
