import { useAtomValue } from 'jotai';
import {
  CombinedStep,
  CombinedValidities,
  combinedValidatiesAtoms,
} from '~/models';

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
) => {
  const entireValidities = useAtomValue(combinedValidatiesAtoms);

  const getStepToGoBack = (
    recursiveFunctionParamStep: CombinedStep | null,
  ): CombinedStep | null => {
    // base case: 최전의 step
    if (recursiveFunctionParamStep === null) return null;

    const isCurrentStepValid = Object.values(
      entireValidities[recursiveFunctionParamStep],
    ).every(Boolean);

    if (!isCurrentStepValid) return recursiveFunctionParamStep;

    return getStepToGoBack(prevSteps[recursiveFunctionParamStep]);
  };

  return getStepToGoBack(prevSteps[step]);
};
