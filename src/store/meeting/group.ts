import { ApplyQuestionArrType } from '~/types/apply.type';
import { atom } from 'jotai';
import { CommonState, initialCommonState } from '~/store/meeting/common';

export type GroupState = {
  code: string;
  info_name: string;
  info_preferDay: string[];
  info_question: ApplyQuestionArrType;
  prefer_age: string[];
  prefer_major: string[];
  prefer_atmosphere: string;
} & CommonState;

const initialGroupState: GroupState = {
  ...initialCommonState,
  code: '',
  info_name: '',
  info_preferDay: [''],
  info_question: [
    { label: '', order: 0 },
    { label: '', order: 1 },
    { label: '', order: 2 },
    { label: '', order: 3 },
  ],
  prefer_age: [''],
  prefer_major: [''],
  prefer_atmosphere: '',
};

export type GroupItemName = keyof GroupState;

type GroupApplyAtoms = {
  [key in GroupItemName]: ReturnType<typeof atom<GroupState[key]>>;
};

export const groupApplyAtoms = (() => {
  const state = {} as GroupApplyAtoms;
  (Object.keys(initialGroupState) as GroupItemName[]).map(key => {
    Object.assign(state, {
      [key]: {
        ...atom<GroupState[typeof key]>(initialGroupState[key]),
        debugLabel: key,
      },
    });
  });
  return state;
})();
