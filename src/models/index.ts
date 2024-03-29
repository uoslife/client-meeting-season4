import { atom } from 'jotai';
import { groupLeaderValiditesAtom } from './group/validation';
import { personalValiditiesAtom } from './personal/validation';
import { CommonData } from './common/data.type';
import { GroupData } from './group/data.type';
import { PersonalData } from './personal/data.type';
import { commonValiditiesAtom } from './common/validation';
import { GroupValidites } from './group/validation.type';
import { CommonValidites } from './common/validation.type';
import { PersonalValidites } from './personal/validation.type';

export type CombinedData = CommonData & GroupData & PersonalData;

export type CombinedStep = keyof CombinedData;

export const combinedValidatiesAtoms = atom<CombinedValidities>(get => ({
  ...get(groupLeaderValiditesAtom),
  ...get(personalValiditiesAtom),
  ...get(commonValiditiesAtom),
}));

combinedValidatiesAtoms.debugLabel = 'combinedValidatiesAtoms';

export type CombinedValidities = CommonValidites &
  GroupValidites &
  PersonalValidites;
