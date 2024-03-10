import { useAtomValue } from 'jotai';
import {
  CombinedStep,
  CombinedValidities,
  combinedValidatiesAtoms,
} from '~/models';

// state가 필요한 이전 라우트를 나타내는 연결 리스트
// TODO: 제대로 지정 필요(copilot의 auto completion으로 아무렇게나 우선 지정해 둔 상태)
const prevSteps: { [key in CombinedStep]: CombinedStep | null } = {
  branchGatewayStep: null,
  univVerificationStep: 'branchGatewayStep',
  groupBranchStep: 'branchGatewayStep',
  groupCreateStep: 'groupBranchStep',
  groupInformationStep: 'groupCreateStep',
  groupLeaderMyInformationStep: 'groupInformationStep',
  groupLeaderpledgeStep: 'groupLeaderMyInformationStep',
  groupPreferStep: 'groupLeaderpledgeStep',
  groupMemberMyInformationStep: 'groupPreferStep',
  groupMemberpledgeStep: 'groupMemberMyInformationStep',
  groupParticipateStep: 'groupMemberpledgeStep',
  myRomanceStep: 'groupParticipateStep',
  personalMyInfoStep: 'myRomanceStep',
  personalPledgeStep: 'personalMyInfoStep',
  preferInfoStep: 'personalPledgeStep',
};

export const useArePrevStepsValid = <Step extends keyof CombinedValidities>(
  step: Step,
) => {
  const entireValidity = useAtomValue(combinedValidatiesAtoms);

  const getArePrevStepsValid = (step: CombinedStep | null): boolean => {
    if (step === null) {
      return true;
    }

    const isCurrentStepValid = Object.values(entireValidity[step]).every(
      Boolean,
    );
    if (!isCurrentStepValid) {
      return false;
    }

    return getArePrevStepsValid(prevSteps[step]);
  };

  return getArePrevStepsValid(prevSteps[step]);
};
