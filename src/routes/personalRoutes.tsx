import MyInformationStep from '~/pages/personal/myInformationStep/Step';
import MyRomanceStep from '~/pages/personal/myRomanceStep/Step';
import MyPreferTypeStep from '~/pages/personal/myPreferTypeStep/Step';

const personalRoutes = [
  {
    path: '/personal/myInformationStep',
    element: <MyInformationStep />,
  },
  {
    path: '/personal/myRomanceStep',
    element: <MyRomanceStep />,
  },
  {
    path: '/personal/preferInfoStep',
    element: <MyPreferTypeStep />,
  },
  {
    path: '/personal/pledgeStep',
    element: <></>,
  },
];

export default personalRoutes;
