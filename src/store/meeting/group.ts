import { ApplyQuestionArrType } from '~/types/apply.type';
import { PrimitiveAtom, atom } from 'jotai';
import { CommonState, commonAtoms } from '~/store/meeting/common';

export type GroupAtoms = {
  code: PrimitiveAtom<string>;
  info_name: PrimitiveAtom<string>;
  info_preferDay: PrimitiveAtom<string[]>;
  info_question: PrimitiveAtom<ApplyQuestionArrType>;
  prefer_age: PrimitiveAtom<string[]>;
  prefer_major: PrimitiveAtom<string[]>;
  prefer_atmosphere: PrimitiveAtom<string>;
} & CommonState;

export const groupApplyAtoms = {
  ...commonAtoms,
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
