import { atom } from 'jotai';
import { commonDataAtoms } from './data';
import { CommonValidator, CommonValidites } from './validation.type';

// used to check validity
export const commonValidators: CommonValidator = {
  univVerificationStep: {
    page1: ({ univType }) => !!univType,
    // page2: ({ checked }) => checked.every(Boolean),
    // page3: ({ verified }) => verified,
    page2: () => true, // temp
    page3: () => true, // temp
  },
  branchGatewayStep: {
    page1: ({ meetingType, checked }) =>
      !!meetingType && checked.every(Boolean),
  },
};

// holds entireValidity, read-only, entire level
export const commonValiditiesAtom = atom<CommonValidites>(get => ({
  univVerificationStep: {
    page1: commonValidators.univVerificationStep.page1(
      get(commonDataAtoms.univVerificationStep.page1),
    ),
    page2: commonValidators.univVerificationStep.page2(
      get(commonDataAtoms.univVerificationStep.page2),
    ),
    page3: commonValidators.univVerificationStep.page3(
      get(commonDataAtoms.univVerificationStep.page3),
    ),
  },
  branchGatewayStep: {
    page1: commonValidators.branchGatewayStep.page1(
      get(commonDataAtoms.branchGatewayStep.page1),
    ),
  },
}));
