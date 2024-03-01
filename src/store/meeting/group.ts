import { ApplyQuestionArrType } from '~/types/apply.type';
import { atom } from 'jotai';
import { CommonApplyAtoms, CommonApplyInfo, commonApplyAtoms } from '.';

export type GroupApplyInfo = {
  code: string;
  info_name: string;
  info_preferDay: string[];
  info_question: ApplyQuestionArrType;
  prefer_age: string[];
  prefer_major: string[];
  prefer_atmosphere: string;
} & CommonApplyInfo;

export type GroupApplyAtoms = {
  [key in keyof GroupApplyInfo]: ReturnType<typeof atom<GroupApplyInfo[key]>>;
} & CommonApplyAtoms;

export const groupApplyAtoms: GroupApplyAtoms = {
  ...commonApplyAtoms,
  code: atom(''),
  info_name: atom(''),
  info_preferDay: atom(['']),
  info_question: atom([
    { selectedAnswerOption: '', order: 0 },
    { selectedAnswerOption: '', order: 1 },
    { selectedAnswerOption: '', order: 2 },
    { selectedAnswerOption: '', order: 3 },
  ]),
  prefer_age: atom(['']),
  prefer_major: atom(['']),
  prefer_atmosphere: atom(''),
};

for (const key in groupApplyAtoms) {
  groupApplyAtoms[key as keyof GroupApplyAtoms].debugLabel = key;
}
