import { atom } from 'jotai';
import { commonDataAtoms } from './data';
import { CommonValidator, CommonValidites } from './validation.type';

// used to check validity
export const commonValidators: CommonValidator = {
  commonUnivVerificationStep: {
    page1: ({ univType }) => !!univType,
    // page2: ({ checked }) => checked.every(Boolean),
    page2: ({ checked }) => checked.every(Boolean),
    page3: () => true, // temp
  },
  commonBranchGatewayStep: {
    page1: ({ meetingType, checked }) =>
      !!meetingType && checked.every(Boolean),
  },
  commonVerifyForCheckAfterAlreadyAppliedStep: {
    page1: ({ univType }) => !!univType,
    page2: ({ verified }) => verified,
  },
  commonVerifyForMatchingResultStep: {
    page1: ({ univType }) => !!univType,
    page2: ({ verified }) => verified,
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
  commonVerifyForCheckAfterAlreadyAppliedStep: {
    page1: commonValidators.commonVerifyForCheckAfterAlreadyAppliedStep.page1(
      get(commonDataAtoms.commonVerifyForCheckAfterAlreadyAppliedStep.page1),
    ),
    page2: commonValidators.commonVerifyForCheckAfterAlreadyAppliedStep.page2(
      get(commonDataAtoms.commonVerifyForCheckAfterAlreadyAppliedStep.page2),
    ),
  },
  commonVerifyForMatchingResultStep: {
    page1: commonValidators.commonVerifyForMatchingResultStep.page1(
      get(commonDataAtoms.commonVerifyForMatchingResultStep.page1),
    ),
    page2: commonValidators.commonVerifyForMatchingResultStep.page2(
      get(commonDataAtoms.commonVerifyForMatchingResultStep.page2),
    ),
  },
}));
