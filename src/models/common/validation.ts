import { atom } from 'jotai';
import { commonDataAtoms } from './data';
import { CommonValidator, CommonValidites } from './validation.type';

// used to check validity
export const commonValidators: CommonValidator = {
  commonUnivVerificationStep: {
    page1: ({ univType }) => !!univType,
    // page2: ({ checked }) => checked.every(Boolean),
    page3: ({ verified }) => verified,
    page2: () => true, // temp
  },
  commonBranchGatewayStep: {
    page1: ({ meetingType, checked }) =>
      !!meetingType && checked.every(Boolean),
  },
  commonVerifyForCheckAfterAleadyAppliedStep: {
    page1: ({ verified }) => verified,
  },
};

// holds entireValidity, read-only, entire level
export const commonValiditiesAtom = atom<CommonValidites>(get => ({
  commonUnivVerificationStep: {
    page1: commonValidators.commonUnivVerificationStep.page1(
      get(commonDataAtoms.commonUnivVerificationStep.page1),
    ),
    page2: commonValidators.commonUnivVerificationStep.page2(
      get(commonDataAtoms.commonUnivVerificationStep.page2),
    ),
    page3: commonValidators.commonUnivVerificationStep.page3(
      get(commonDataAtoms.commonUnivVerificationStep.page3),
    ),
  },
  commonBranchGatewayStep: {
    page1: commonValidators.commonBranchGatewayStep.page1(
      get(commonDataAtoms.commonBranchGatewayStep.page1),
    ),
  },
  commonVerifyForCheckAfterAleadyAppliedStep: {
    page1: commonValidators.commonVerifyForCheckAfterAleadyAppliedStep.page1(
      get(commonDataAtoms.commonVerifyForCheckAfterAleadyAppliedStep.page1),
    ),
  },
}));
