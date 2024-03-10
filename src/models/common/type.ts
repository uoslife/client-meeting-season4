import { Univ } from '~/models/options';

// data model
export type CommonData = {
  univVerificationStep: {
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
  branchGatewayStep: {
    page1: {
      meetingType: 'group' | 'personal' | null;
      checked: [boolean, boolean];
    };
  };
};

// validator model
export type CommonValidator = {
  readonly [key in keyof CommonData]: {
    readonly [key2 in keyof CommonData[key]]: (
      pageInfo: CommonData[key][key2],
    ) => boolean;
  };
};

// validity atom value model
export type CommonValidites = {
  [key1 in keyof CommonData]: {
    [key2 in keyof CommonData[key1]]: boolean;
  };
};
