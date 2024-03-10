import { atom } from 'jotai';
import { CommonData } from './type';

// initial values
export const commonInitialData: CommonData = {
  univVerificationStep: {
    page1: {
      univType: null,
    },
    page2: {
      checked: [false, false],
    },
    page3: {
      verified: false,
    },
  },
  branchGatewayStep: {
    page1: {
      meetingType: null,
      checked: [false, false],
    },
  },
};

// page level atom: each holds data, write/read
export const commonDataAtoms = {
  univVerificationStep: {
    page1: atom(commonInitialData.univVerificationStep.page1),
    page2: atom(commonInitialData.univVerificationStep.page2),
    page3: atom(commonInitialData.univVerificationStep.page3),
  },
  branchGatewayStep: {
    page1: atom(commonInitialData.branchGatewayStep.page1),
  },
};
