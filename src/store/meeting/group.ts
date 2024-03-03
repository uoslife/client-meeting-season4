import { ApplyQuestionArrType } from '~/types/apply.type';
import { CommonApplyAtoms, commonApplyAtoms } from '.';
import { atomWithStorage } from 'jotai/utils';

export type GroupApplyInfo = {
<<<<<<< HEAD
  code: string;
  info_name: string;
  info_preferDay: string[];
  info_question: ApplyQuestionArrType;
  prefer_age: string[];
  prefer_univ: string[];
  prefer_atmosphere: string;
=======
  groupJoin_code: string;
  groupInfo_name: string;
  groupInfo_preferDay: string[];
  groupInfo_question: ApplyQuestionArrType;
  groupPrefer_age: string[];
  groupPrefer_univ: string[];
  groupPrefer_atmosphere: string;
>>>>>>> bd632e365d9bace8d52ba5b87fdf439e3b845b3b
};

export type GroupApplyAtoms = {
  [key in keyof GroupApplyInfo]: ReturnType<
    typeof atomWithStorage<GroupApplyInfo[key]>
  >;
} & CommonApplyAtoms;

export const groupApplyAtoms: GroupApplyAtoms = {
  ...commonApplyAtoms,
  groupJoin_code: atomWithStorage('groupJoin_code', ''),
  groupInfo_name: atomWithStorage('groupInfo_name', ''),
  groupInfo_preferDay: atomWithStorage('groupInfo_preferDay', ['']),
  groupInfo_question: atomWithStorage('groupInfo_question', [
    { label: '', order: 0 },
    { label: '', order: 1 },
    { label: '', order: 2 },
    { label: '', order: 3 },
  ]),
<<<<<<< HEAD
  prefer_age: atom(['']),
  prefer_univ: atom(['']),
  prefer_atmosphere: atom(''),
=======
  groupPrefer_age: atomWithStorage('groupPrefer_age', ['']),
  groupPrefer_univ: atomWithStorage('groupPrefer_univ', ['']),
  groupPrefer_atmosphere: atomWithStorage('groupPrefer_atmosphere', ''),
>>>>>>> bd632e365d9bace8d52ba5b87fdf439e3b845b3b
};

for (const key in groupApplyAtoms) {
  groupApplyAtoms[key as keyof GroupApplyAtoms].debugLabel = key;
}
