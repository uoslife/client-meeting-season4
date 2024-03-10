import { CommonData } from './data.type';

// validator model
export type CommonValidator = {
  [key in keyof CommonData]: {
    [key2 in keyof CommonData[key]]: (
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
