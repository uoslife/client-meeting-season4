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
  univVerificationStep: null,
  branchGatewayStep: 'univVerificationStep',
  groupRoleSelectStep: 'branchGatewayStep',
  groupLeaderMyInformationStep: 'groupRoleSelectStep',
  groupLeaderGroupCreateStep: 'groupLeaderMyInformationStep',
  groupLeaderGroupInformationStep: 'groupLeaderGroupCreateStep',
  groupLeaderPreferStep: 'groupLeaderGroupInformationStep',
  groupLeaderPledgeStep: 'groupLeaderPreferStep',
  groupMemberMyInformationStep: 'groupRoleSelectStep',
  groupMemberParticipateStep: 'groupMemberMyInformationStep',
  groupMemberPledgeStep: 'groupMemberParticipateStep',
  personalMyInformationStep: 'branchGatewayStep',
  personalMyRomanceStep: 'personalMyInformationStep',
  personalPreferInfoStep: 'personalMyRomanceStep',
  personalPledgeStep: 'personalPreferInfoStep',
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
