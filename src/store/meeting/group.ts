import { ApplyQuestionArrType } from '~/types/apply.type';
import { atom } from 'jotai';
import { CommonApplyAtoms, commonApplyAtoms } from '.';

export type GroupApplyInfo = {
  code: string;
  info_name: string;
  info_preferDay: string[];
  info_question: ApplyQuestionArrType;
  prefer_age: string[];
  prefer_major: string[];
  prefer_atmosphere: string;
};

export type GroupApplyAtoms = {
  [key in keyof GroupApplyInfo]: ReturnType<typeof atom<GroupApplyInfo[key]>>;
} & CommonApplyAtoms;

export const groupApplyAtoms = {
  ...commonApplyAtoms,
  code: atom(''),
  info_name: atom(''),
  info_preferDay: atom(['']),
  info_question: atom([
    { label: '', order: 0 },
    { label: '', order: 1 },
    { label: '', order: 2 },
    { label: '', order: 3 },
  ]),
  prefer_age: atom(['']),
  prefer_major: atom(['']),
  prefer_atmosphere: atom(''),
};

for (const key in groupApplyAtoms) {
  groupApplyAtoms[key as keyof GroupApplyAtoms].debugLabel = key;
}
