import { ApplyQuestionArrType } from '~/types/apply.type';
import { atom } from 'jotai';
import { CommonState, initialCommonState } from '~/store/meeting/common';

export type PersonalState = {
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
} & CommonState;

const initialPersonalState: PersonalState = {
  ...initialCommonState,
  info_religion: '',
  info_smoking: '',
  info_drink: [''],
  info_animal: [''],
  info_mbti: ['', '', '', ''],
  info_interests: [''],
  info_question: [
    { label: '', order: 0 },
    { label: '', order: 1 },
    { label: '', order: 2 },
    { label: '', order: 3 },
    { label: '', order: 4 },
  ],
  prefer_age: [''],
  prefer_height: [''],
  prefer_studentType: [''],
  prefer_univ: [''],
  prefer_smoking: '',
  prefer_religion: '',
  prefer_drink: [''],
  prefer_animal: [''],
  prefer_mbti: [''],
};

export type PersonalItemName = keyof PersonalState;

type PersonalApplyAtoms = {
  [key in PersonalItemName]: ReturnType<typeof atom<PersonalState[key]>>;
};

export const personalApplyAtoms = (() => {
  const state = {} as PersonalApplyAtoms;
  (
    Object.keys(initialPersonalState) as (keyof typeof initialPersonalState)[]
  ).map(key => {
    Object.assign(state, {
      [key]: {
        ...atom<PersonalState[typeof key]>(initialPersonalState[key]),
        debugLabel: key,
      },
    });
  });
  return state;
})();
