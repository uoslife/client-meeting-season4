import MyInformationStep from '~/pages/group/myInfomationStep/Step';
import MyRomanceStep from '~/pages/personal/myRomanceStep/Step';
import MyPreferTypeStep from '~/pages/personal/myPreferTypeStep/Step';
import GroupRoleSelectStep from '~/pages/group/groupRoleSelectStep/Step';
import GroupCreateStep from '~/pages/group/groupCreateStep/Step';
import GroupParticipateStep from '~/pages/group/groupParticipateStep/Step';
import GroupInformationStep from '~/pages/group/groupInformationStep/Step';
import GroupPreferStep from '~/pages/group/groupPreferStep/Step';

const groupRoutes = [
  {
    // 모임을 만드시나요? 참여하시나요?
    path: '/group/groupRoleSelectStep',
    element: <GroupRoleSelectStep />,
  },

  //--------------------------------------------------------//
  //---------------------- 이하 팅장 ------------------------//
  //--------------------------------------------------------//

  {
    // 1. 나의 정보 입력하기
    path: '/group/leader/myInformationStep',
    element: <MyInformationStep />, // .
  },
  {
    // 2. 팅 만들기
    path: '/group/leader/groupCreateStep',
    element: <GroupCreateStep />,
  },
  {
    // 3. 우리 팅 정보 입력하기
    path: '/group/leader/groupInformationStep',
    element: <></>, // .
  },
  {
    // 4. 만나고 싶은 팅 정보 입력하기
    path: '/group/leader/preferStep',
    element: <></>, // .
  },
  {
    // 5. 시대팅 이용 서약
    path: '/group/leader/pledgeStep',
    element: <></>, // .
  },
  {
    // 6. 신청 정보 확인하기
    path: '/group/leader/checkApplyInfoStep',
    element: <></>, // .
  },

  //--------------------------------------------------------//
  //---------------------- 이상 팅장 ------------------------//
  //--------------------------------------------------------//

  //--------------------------------------------------------//
  //---------------------- 이하 팅원 ------------------------//
  //--------------------------------------------------------//

  {
    // 1. 나의 정보 입력하기
    path: 'group/member/myInformationStep',
    element: <></>,
  },
  {
    // 2. 팅 참여하기
    path: '/group/member/participateStep',
    element: <GroupParticipateStep />,
  },
  {
    // 3. 시대팅 이용 서약
    path: '/group/member/pledgeStep',
    element: <></>,
  },

  //--------------------------------------------------------//
  //---------------------- 이상 팅원 ------------------------//
  //--------------------------------------------------------//

  // deprecated or 잘 바꿔서 재활용
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
];

export default groupRoutes;
