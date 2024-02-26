import { ApplyData, ApplyQuestionArrType } from '~/types/apply.type';
import { atom } from 'jotai';
import { CommonState, initialCommonState } from '~/store/meeting/common';

export type GroupState = {
  code: string;
  info_name: ApplyData<string>;
  info_preferDay: ApplyData<string[]>;
  info_question: ApplyData<ApplyQuestionArrType>;
  prefer_age: ApplyData<string[]>;
  prefer_major: ApplyData<string[]>;
  prefer_atmosphere: ApplyData<string>;
} & CommonState;

const initialGroupState: GroupState = {
  ...initialCommonState,
  code: '',
  info_name: {
    title_kr: '팅 이름',
    title_en: 'name',
    type: 'info',
    data: '',
  },
  info_preferDay: {
    title_kr: '선호요일',
    title_en: 'preferDay',
    type: 'info',
    data: [''],
  },
  info_question: {
    title_kr: 'Q&A',
    title_en: 'question',
    type: 'info',
    data: [
      { label: '', order: 0 },
      { label: '', order: 1 },
      { label: '', order: 2 },
      { label: '', order: 3 },
    ],
  },
  prefer_age: {
    title_kr: '나이',
    title_en: 'age',
    type: 'prefer',
    data: [''],
  },
  prefer_major: {
    title_kr: '대학',
    title_en: 'univ',
    type: 'prefer',
    data: [''],
  },
  prefer_atmosphere: {
    title_kr: '분위기',
    title_en: 'atmosphere',
    type: 'prefer',
    data: '',
  },
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
