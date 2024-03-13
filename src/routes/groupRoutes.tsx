import GroupRoleSelectStep from '~/pages/group/roleSelectStep/Step';
import GroupLeaderMyInformationStep from '~/pages/group/leader/myInfomationStep/Step';
import GroupLeaderGroupInformationStep from '~/pages/group/leader/groupInformationStep/Step';
import GroupLeaderPreferStep from '~/pages/group/leader/preferStep/Step';
import GroupLeaderCreateStep from '~/pages/group/leader/createStep/Step';
import GroupLeaderPledgeStep from '~/pages/group/leader/pledgeStep/Step';
import GroupMemberMyInformationStep from '~/pages/group/member/myInformationStep/Step';
import GroupMemberParticipateStep from '~/pages/group/member/participateStep/Step';
import GroupMemberPledgeStep from '~/pages/group/member/pledgeStep/Step';
import TeamMeamberFinishApplyStep from '~/pages/group/teamMemberFinishApplyStep/Step';

const groupRoutes = [
  {
    // 모임을 만드시나요? 참여하시나요?
    path: '/group/roleSelectStep',
    element: <GroupRoleSelectStep />,
  },

  //--------------------------------------------------------//
  //---------------------- 이하 팅장 ------------------------//
  //--------------------------------------------------------//

  {
    // 1. 나의 정보 입력하기
    path: '/group/leader/myInformationStep',
    element: <GroupLeaderMyInformationStep />, // .
  },
  {
    // 2. 팅 만들기
    path: '/group/leader/createStep',
    element: <GroupLeaderCreateStep />,
  },
  {
    // 3. 우리 팅 정보 입력하기
    path: '/group/leader/groupInformationStep',
    element: <GroupLeaderGroupInformationStep />, // .
  },
  {
    // 4. 만나고 싶은 팅 정보 입력하기
    path: '/group/leader/preferStep',
    element: <GroupLeaderPreferStep />, // .
  },
  {
    // 5. 시대팅 이용 서약
    path: '/group/leader/pledgeStep',
    element: <GroupLeaderPledgeStep />, // .
  },

  //--------------------------------------------------------//
  //---------------------- 이상 팅장 ------------------------//
  //--------------------------------------------------------//

  //--------------------------------------------------------//
  //---------------------- 이하 팅원 ------------------------//
  //--------------------------------------------------------//

  {
    // 1. 나의 정보 입력하기
    path: '/group/member/myInformationStep',
    element: <GroupMemberMyInformationStep />,
  },
  {
    // 2. 팅 참여하기
    path: '/group/member/participateStep',
    element: <GroupMemberParticipateStep />,
  },
  {
    // 3. 시대팅 이용 서약
    path: '/group/member/pledgeStep',
    element: <GroupMemberPledgeStep />,
  },
  {
    path: '/group/teamMemberFinishApplyStep',
    element: <TeamMeamberFinishApplyStep />,
  },

  //--------------------------------------------------------//
  //---------------------- 이상 팅원 ------------------------//
  //--------------------------------------------------------//
] as const;

export default groupRoutes;

export type GroupPath = Extract<
  (typeof groupRoutes)[number]['path'],
  `/${string}`
>;

export type GroupPathPostfixes =
  Extract<GroupPath, `/group/${string}`> extends `/group/${infer T}`
    ? T
    : never;
