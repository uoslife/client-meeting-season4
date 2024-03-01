import MyInformationStep from '~/pages/personal/myInformationStep/Step';
import MyRomanceStep from '~/pages/personal/myRomanceStep/Step';
import MyPreferTypeStep from '~/pages/personal/myPreferTypeStep/Step';
import GroupRoleSelectStep from '~/pages/group/groupRoleSelectStep/Step';
import GroupCreateStep from '~/pages/group/groupCreateStep/Step';
import GroupParticipateStep from '~/pages/group/groupParticipateStep/Step';
import GroupInformationStep from '~/pages/group/groupInformationStep/Step';
import GroupPreferStep from '~/pages/group/groupPreferStep/Step';
import GroupCheckApplyInfoStep from '~/pages/group/checkApplyInfoStep/Step';

const groupRoutes = [
  {
    path: '/group/groupRoleSelectStep',
    element: <GroupRoleSelectStep />,
  },
  {
    path: '/group/myInformationStep',
    element: <MyInformationStep />,
  },
  {
    path: '/group/groupCreateStep',
    element: <GroupCreateStep />,
  },
  {
    path: '/group/groupParticipateStep',
    element: <GroupParticipateStep />,
  },
  {
    path: '/group/groupPreferStep',
    element: <GroupPreferStep />,
  },
  {
    path: '/group/groupInformationStep',
    element: <GroupInformationStep />,
  },
  {
    path: '/group/groupRomanceStep',
    element: <MyRomanceStep />,
  },
  {
    path: '/group/groupPreferTypeStep',
    element: <MyPreferTypeStep />,
  },
  {
    path: '/group/checkApplyInfoStep',
    element: <GroupCheckApplyInfoStep />,
  },
];

export default groupRoutes;
