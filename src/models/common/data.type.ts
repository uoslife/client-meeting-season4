import { atomWithStorage } from 'jotai/utils';
import { Univ } from '../options';

export type CommonData = {
  commonUnivVerificationStep: {
    page1: {
      univType: Univ | null;
    };
    page2: {
      checked: [boolean, boolean];
    };
    page3: {
      verified: boolean;
    };
  };
  commonBranchGatewayStep: {
    page1: {
      meetingType: 'group' | 'personal' | null;
      checked: [boolean, boolean];
    };
  };
};

export type CommonDataAtoms = {
  [key1 in keyof CommonData]: {
    [key2 in keyof CommonData[key1]]: ReturnType<
      typeof atomWithStorage<CommonData[key1][key2]>
    >;
  };
};
