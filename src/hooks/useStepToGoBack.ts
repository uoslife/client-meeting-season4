import { useAtomValue } from 'jotai';
import {
  CombinedStep,
  CombinedValidities,
  combinedValidatiesAtoms,
} from '~/models';
import { CommonPath } from '~/routes/commonRoutes';
import { GroupPath } from '~/routes/groupRoutes';
import { PersonalPath } from '~/routes/personalRoutes';

// state가 필요한 이전 라우트를 나타내는 연결 리스트
const prevSteps: {
  [key in CombinedStep]: CombinedStep | null;
} = {
  commonUnivVerificationStep: null,
  commonBranchGatewayStep: 'commonUnivVerificationStep', // /common/branchGatewayStep
  groupRoleSelectStep: 'commonBranchGatewayStep', // /group/roleSelectStep
  groupLeaderMyInformationStep: 'groupRoleSelectStep', // /group/leader/myInformationStep
  groupLeaderGroupCreateStep: 'groupLeaderMyInformationStep', // /group/leader/createStep
  groupLeaderGroupInformationStep: 'groupLeaderGroupCreateStep', // /group/leader/groupInformationStep
  groupLeaderPreferStep: 'groupLeaderGroupInformationStep', // /group/leader/preferStep
  groupLeaderPledgeStep: 'groupLeaderPreferStep', // /group/leader/pledgeStep
  groupMemberMyInformationStep: 'groupRoleSelectStep', // /group/member/myInformationStep
  groupMemberParticipateStep: 'groupMemberMyInformationStep', // /group/member/participateStep
  groupMemberPledgeStep: 'groupMemberParticipateStep', // /group/member/pledgeStep
  personalMyInformationStep: 'commonBranchGatewayStep', // /personal/myInformationStep
  personalMyRomanceStep: 'personalMyInformationStep', // /personal/myRomanceStep
  personalPreferInfoStep: 'personalMyRomanceStep', // /personal/myPreferTypeStep
  personalPledgeStep: 'personalPreferInfoStep', // /personal/pledgeStep
};

/**
 * 유효하지 않은 Step이 존재 -> 해당 페이지 반환.
 * 모든 페이지가 유효 -> null 반환.
 */
export const useStepToGoBack = <Step extends keyof CombinedValidities>(
  step: Step,
): null | CommonPath | PersonalPath | GroupPath => {
  const entireValidities = useAtomValue(combinedValidatiesAtoms);

  const getStepToGoBackVariableName = (
    current: CombinedStep | null,
  ): CombinedStep | null => {
    let ret: CombinedStep | null = null;

    while (current !== null) {
      const isCurrentStepValid = Object.values(entireValidities[current]).every(
        Boolean,
      );

      if (!isCurrentStepValid) ret = current;

      current = prevSteps[current];
    }

    return ret;
  };

  const stepToGoBack = getStepToGoBackVariableName(prevSteps[step]);

  if (stepToGoBack === null) return null;

  return variableNameToPathName[stepToGoBack];
};

const variableNameToPathName: {
  [key in CombinedStep]: CommonPath | GroupPath | PersonalPath;
} = {
  commonBranchGatewayStep: '/common/branchGatewayStep',
  commonUnivVerificationStep: '/common/univVerificationStep',
  groupLeaderGroupCreateStep: '/group/leader/createStep',
  groupLeaderGroupInformationStep: '/group/leader/groupInformationStep',
  groupRoleSelectStep: '/group/roleSelectStep',
  groupLeaderMyInformationStep: '/group/leader/myInformationStep',
  groupLeaderPledgeStep: '/group/leader/pledgeStep',
  groupLeaderPreferStep: '/group/leader/preferStep',
  groupMemberMyInformationStep: '/group/member/myInformationStep',
  groupMemberParticipateStep: '/group/member/participateStep',
  groupMemberPledgeStep: '/group/member/pledgeStep',
  personalMyInformationStep: '/personal/myInformationStep',
  personalMyRomanceStep: '/personal/myRomanceStep',
  personalPledgeStep: '/personal/pledgeStep',
  personalPreferInfoStep: '/personal/myPreferTypeStep',
};
