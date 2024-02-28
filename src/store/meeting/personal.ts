import { ApplyQuestionArrType } from '~/types/apply.type';
import { atom } from 'jotai';
import { CommonApplyAtoms, commonApplyAtoms } from '.';

export type PersonalApplyInfo = {
  info_drink: string[];
  info_religion: string;
  info_smoking: string;
  info_animal: string[];
  info_mbti: string[];
  info_interests: string[];
  info_question: ApplyQuestionArrType;
  prefer_age: string[];
  prefer_height: string[];
  prefer_studentType: string[];
  prefer_univ: string[];
  prefer_drink: string[];
  prefer_religion: string;
  prefer_smoking: string;
  prefer_animal: string[];
  prefer_mbti: string[];
};

export type PesronalApplyAtoms = {
  [key in keyof PersonalApplyInfo]: ReturnType<
    typeof atom<PersonalApplyInfo[key]>
  >;
} & CommonApplyAtoms;

export const personalApplyAtoms: PesronalApplyAtoms = {
  ...commonApplyAtoms,
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

for (const key in personalApplyAtoms) {
  personalApplyAtoms[key as keyof PesronalApplyAtoms].debugLabel = key;
}
