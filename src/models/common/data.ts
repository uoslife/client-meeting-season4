import { CommonData, CommonDataAtoms } from './data.type';
import { atomWithStorage } from 'jotai/utils';

// initial values
export const commonInitialData: CommonData = {
  commonUnivVerificationStep: {
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
  commonBranchGatewayStep: {
    page1: {
      meetingType: null,
      checked: [false, false],
    },
  },
  commonVerifyForCheckAfterAleadyAppliedStep: {
    page1: {
      verified: false,
    },
  },
};

// page level atom: each holds data, write/read
export const commonDataAtoms: CommonDataAtoms = {
  commonUnivVerificationStep: {
    page1: atomWithStorage(
      'commonUnivVerificationStep-page1',
      commonInitialData.commonUnivVerificationStep.page1,
    ),
    page2: atomWithStorage(
      'commonUnivVerificationStep-page2',
      commonInitialData.commonUnivVerificationStep.page2,
    ),
    page3: atomWithStorage(
      'commonUnivVerificationStep-page3',
      commonInitialData.commonUnivVerificationStep.page3,
    ),
  },
  commonBranchGatewayStep: {
    page1: atomWithStorage(
      'commonBranchGatewayStep-page1',
      commonInitialData.commonBranchGatewayStep.page1,
    ),
  },
  commonVerifyForCheckAfterAleadyAppliedStep: {
    page1: atomWithStorage(
      'commonVerifyForCheckAfterAleadyAppliedStep-page1',
      commonInitialData.commonVerifyForCheckAfterAleadyAppliedStep.page1,
    ),
  },
};
