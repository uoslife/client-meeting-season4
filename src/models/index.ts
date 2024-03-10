import { CommonData, CommonValidites } from './common/type';
import { GroupLeaderData, GroupLeaderValidites } from './group-leader/type';
import { GroupMemberData, GroupMemberValidites } from './group-member/type';
import { PersonalData, PersonalValidites } from './personal/type';
import { groupLeaderValiditesAtom } from './group-leader/validation';
import { commonValiditiesAtom } from './common/validation';
import { personalValiditiesAtom } from './personal/validation';
import { groupMemberValiditiesAtom } from './group-member/validation';
import { atom } from 'jotai';

export type CombinedData = CommonData &
  GroupLeaderData &
  GroupMemberData &
  PersonalData;

export type CombinedStep = keyof CombinedData;

export const combinedValidatiesAtoms = atom<CombinedValidities>(get => ({
  ...get(groupLeaderValiditesAtom),
  ...get(personalValiditiesAtom),
  ...get(groupMemberValiditiesAtom),
  ...get(commonValiditiesAtom),
}));

export type CombinedValidities = CommonValidites &
  PersonalValidites &
  GroupLeaderValidites &
  GroupMemberValidites;
