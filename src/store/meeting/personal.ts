import { ApplyData, ApplyQuestionArrType } from '~/types/apply.type';
import { atom } from 'jotai';
import { CommonState, initialCommonState } from '~/store/meeting/common';

export type PersonalState = {
  info_drink: ApplyData<string[]>;
  info_religion: ApplyData<string>;
  info_smoking: ApplyData<string>;
  info_animal: ApplyData<string[]>;
  info_mbti: ApplyData<string[]>;
  info_interests: ApplyData<string[]>;
  info_question: ApplyData<ApplyQuestionArrType>;
  prefer_age: ApplyData<string[]>;
  prefer_height: ApplyData<string[]>;
  prefer_studentType: ApplyData<string[]>;
  prefer_univ: ApplyData<string[]>;
  prefer_drink: ApplyData<string[]>;
  prefer_religion: ApplyData<string>;
  prefer_smoking: ApplyData<string>;
  prefer_animal: ApplyData<string[]>;
  prefer_mbti: ApplyData<string[]>;
} & CommonState;

const initialPersonalState: PersonalState = {
  ...initialCommonState,
  info_religion: {
    title_kr: '종교',
    title_en: 'religion',
    type: 'info',
    data: '',
  },
  info_smoking: {
    title_kr: '흡연',
    title_en: 'smoking',
    type: 'info',
    data: '',
  },
  info_drink: {
    title_kr: '음주 횟수',
    title_en: 'drink',
    type: 'info',
    data: [''],
  },
  info_animal: {
    title_kr: '동물상',
    title_en: 'animal',
    type: 'info',
    data: [''],
  },
  info_mbti: {
    title_kr: 'MBTI',
    title_en: 'mbti',
    type: 'info',
    data: ['', '', '', ''],
  },
  info_interests: {
    title_kr: '관심사',
    title_en: 'interests',
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
      { label: '', order: 4 },
    ],
  },
  prefer_age: {
    title_kr: '나이',
    title_en: 'age',
    type: 'prefer',
    data: [''],
  },
  prefer_height: {
    title_kr: '키',
    title_en: 'height',
    type: 'prefer',
    data: [''],
  },
  prefer_studentType: {
    title_kr: '신분',
    title_en: 'studentType',
    type: 'prefer',
    data: [''],
  },
  prefer_univ: {
    title_kr: '선호 대학',
    title_en: 'univ',
    type: 'prefer',
    data: [''],
  },
  prefer_smoking: {
    title_kr: '흡연 여부',
    title_en: 'smoking',
    type: 'prefer',
    data: '',
  },
  prefer_religion: {
    title_kr: '선호 종교',
    title_en: 'religion',
    type: 'prefer',
    data: '',
  },
  prefer_drink: {
    title_kr: '음주 횟수',
    title_en: 'drink',
    type: 'prefer',
    data: [''],
  },
  prefer_animal: {
    title_kr: '동물상',
    title_en: 'animal',
    type: 'prefer',
    data: [''],
  },
  prefer_mbti: {
    title_kr: 'MBTI',
    title_en: 'mbti',
    type: 'prefer',
    data: [''],
  },
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
