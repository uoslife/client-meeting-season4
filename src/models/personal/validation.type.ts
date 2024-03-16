import { PersonalData } from './data.type';

// validator model
export type PersonalValidator = {
  [key1 in keyof PersonalData]: {
    [key2 in keyof PersonalData[key1]]: (
      pageInfo: PersonalData[key1][key2],
    ) => boolean;
  };
};

// validity atom value model
export type PersonalValidites = {
  [key1 in keyof PersonalData]: {
    [key2 in keyof PersonalData[key1]]: boolean;
  };
};
