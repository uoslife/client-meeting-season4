import { ApplyQuestionArrType } from '~/types/apply.type';
import { CommonApplyInfo, commonApplyAtoms } from '.';
import { atomWithStorage } from 'jotai/utils';

export type GroupApplyInfo = {
  groupRole_isLeader: boolean | null;
  groupJoin_code: string;
  groupInfo_name: string;
  groupInfo_preferDay: string[];
  groupInfo_question: ApplyQuestionArrType;
  groupPrefer_age: string[];
  groupPrefer_univ: string[];
  groupPrefer_atmosphere: string;
} & CommonApplyInfo;

export type GroupApplyAtoms = {
  [key in keyof GroupApplyInfo]: ReturnType<
    typeof atomWithStorage<GroupApplyInfo[key]>
  >;
};

export const groupApplyAtoms: GroupApplyAtoms = {
  ...commonApplyAtoms,
  groupRole_isLeader: atomWithStorage<boolean | null>(
    'groupRole_isLeader',
    null,
  ),
  groupJoin_code: atomWithStorage('groupJoin_code', ''),
  groupInfo_name: atomWithStorage('groupInfo_name', ''),
  groupInfo_preferDay: atomWithStorage('groupInfo_preferDay', ['']),
  groupInfo_question: atomWithStorage('groupInfo_question', [
    { label: '', order: 0 },
    { label: '', order: 1 },
    { label: '', order: 2 },
    { label: '', order: 3 },
  ]),

  groupPrefer_age: atomWithStorage('groupPrefer_age', ['']),
  groupPrefer_univ: atomWithStorage<string[]>('groupPrefer_univ', []),
  groupPrefer_atmosphere: atomWithStorage('groupPrefer_atmosphere', ''),
};

for (const key in groupApplyAtoms) {
  groupApplyAtoms[key as keyof GroupApplyAtoms].debugLabel = key;
}
