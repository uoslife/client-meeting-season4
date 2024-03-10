import { CommonData } from './type';
import { atomWithStorage } from 'jotai/utils';

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
    page1: atomWithStorage(
      'univVerificationStep-page1',
      commonInitialData.univVerificationStep.page1,
    ),
    page2: atomWithStorage(
      'univVerificationStep-page2',
      commonInitialData.univVerificationStep.page2,
    ),
    page3: atomWithStorage(
      'univVerificationStep-page3',
      commonInitialData.univVerificationStep.page3,
    ),
  },
  branchGatewayStep: {
    page1: atomWithStorage(
      'univVerificationStep-page4',
      commonInitialData.branchGatewayStep.page1,
    ),
  },
};
