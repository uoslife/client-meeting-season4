import { ApplyQuestionArrType } from '~/types/apply.type';
import { PrimitiveAtom, atom } from 'jotai';
import { CommonState, commonAtoms } from '~/store/meeting/common';

export type PesronalApplyAtoms = {
  info_drink: PrimitiveAtom<string[]>;
  info_religion: PrimitiveAtom<string>;
  info_smoking: PrimitiveAtom<string>;
  info_animal: PrimitiveAtom<string[]>;
  info_mbti: PrimitiveAtom<string[]>;
  info_interests: PrimitiveAtom<string[]>;
  info_question: PrimitiveAtom<ApplyQuestionArrType>;
  prefer_age: PrimitiveAtom<string[]>;
  prefer_height: PrimitiveAtom<string[]>;
  prefer_studentType: PrimitiveAtom<string[]>;
  prefer_univ: PrimitiveAtom<string[]>;
  prefer_drink: PrimitiveAtom<string[]>;
  prefer_religion: PrimitiveAtom<string>;
  prefer_smoking: PrimitiveAtom<string>;
  prefer_animal: PrimitiveAtom<string[]>;
  prefer_mbti: PrimitiveAtom<string[]>;
} & CommonState;

export const personalApplyAtoms: PesronalApplyAtoms = {
  ...commonAtoms,
  info_religion: atom(''),
  info_smoking: atom(''),
  info_drink: atom(['']),
  info_animal: atom(['']),
  info_mbti: atom(['', '', '', '']),
  info_interests: atom(['']),
  info_question: atom([
    { label: '', order: 0 },
    { label: '', order: 1 },
    { label: '', order: 2 },
    { label: '', order: 3 },
    { label: '', order: 4 },
  ]),
  prefer_age: atom(['']),
  prefer_height: atom(['']),
  prefer_studentType: atom(['']),
  prefer_univ: atom(['']),
  prefer_smoking: atom(''),
  prefer_religion: atom(''),
  prefer_drink: atom(['']),
  prefer_animal: atom(['']),
  prefer_mbti: atom(['']),
};
