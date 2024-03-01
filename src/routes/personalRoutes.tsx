import MyInformationStep from '~/pages/personal/myInformationStep/Step';
import MyRomanceStep from '~/pages/personal/myRomanceStep/Step';
import MyPreferTypeStep from '~/pages/personal/myPreferTypeStep/Step';
import PersonalCheckApplyInfoStep from '~/pages/personal/checkApplyInfoStep/Step';

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
    path: '/personal/mypPreferTypeStep',
    element: <MyPreferTypeStep />,
  },
  {
    path: '/personal/checkApplyInfoStep',
    element: <PersonalCheckApplyInfoStep />,
  },
];

export default personalRoutes;
