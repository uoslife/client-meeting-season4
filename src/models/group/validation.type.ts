import { GroupData } from './data.type';

// validator model
export type GroupValidator = {
  [key in keyof GroupData]: {
    [key2 in keyof GroupData[key]]: (pageInfo: GroupData[key][key2]) => boolean;
  };
};

// validity atom value model
export type GroupValidites = {
  [key in keyof GroupData]: {
    [key2 in keyof GroupData[key]]: boolean;
  };
};
