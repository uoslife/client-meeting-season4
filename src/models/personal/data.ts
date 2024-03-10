import { PersonalData } from './data.type';
import { atomWithStorage } from 'jotai/utils';

export const personalInitialData: PersonalData = {
  personalMyInfoStep: {
    page1: {
      nickname: '',
      gender: null,
      age: null,
      height: null,
    },
    page2: {
      kakaoId: '',
      phone: '',
      major: '',
      studentType: null,
    },
    page3: {
      religion: null,
      smoking: null,
      drinkRange: [5, 6],
    },
    page4: {
      animalOptions: [],
    },
    page5: {
      mbti: null,
    },
    page6: {
      interestOptions: [],
    },
    page7: {
      message: '',
    },
  },
  myRomanceStep: {
    page1: { answer: null },
    page2: { answer: null },
    page3: { answer: null },
    page4: { answer: null },
    page5: { answer: null },
  },
  preferInfoStep: {
    page1: {
      ageRange: [20, 21],
      heightRange: [175, 185],
      studentTypes: [],
    },
    page2: {
      univs: [],
      religionOptions: [],
      smokingOptions: [],
      drinkRange: [1, 2],
    },
    page3: { animalOptions: [] },
    page4: { mbtiOptions: ['INTJ'] },
  },
  personalPledgeStep: {
    page1: {
      checked: [false, false, false],
    },
  },
};

export const personalDataAtoms = {
  personalMyInfoStep: {
    page1: atomWithStorage(
      'personalMyInfoStep-page1',
      personalInitialData.personalMyInfoStep.page1,
    ),
    page2: atomWithStorage(
      'personalMyInfoStep-page2',
      personalInitialData.personalMyInfoStep.page2,
    ),
    page3: atomWithStorage(
      'personalMyInfoStep-page3',
      personalInitialData.personalMyInfoStep.page3,
    ),
    page4: atomWithStorage(
      'personalMyInfoStep-page4',
      personalInitialData.personalMyInfoStep.page4,
    ),
    page5: atomWithStorage(
      'personalMyInfoStep-page5',
      personalInitialData.personalMyInfoStep.page5,
    ),
    page6: atomWithStorage(
      'personalMyInfoStep-page6',
      personalInitialData.personalMyInfoStep.page6,
    ),
    page7: atomWithStorage(
      'personalMyInfoStep-page7',
      personalInitialData.personalMyInfoStep.page7,
    ),
  },
  myRomanceStep: {
    page1: atomWithStorage(
      'myRomanceStep-page1',
      personalInitialData.myRomanceStep.page1,
    ),
    page2: atomWithStorage(
      'myRomanceStep-page2',
      personalInitialData.myRomanceStep.page2,
    ),
    page3: atomWithStorage(
      'myRomanceStep-page3',
      personalInitialData.myRomanceStep.page3,
    ),
    page4: atomWithStorage(
      'myRomanceStep-page4',
      personalInitialData.myRomanceStep.page4,
    ),
    page5: atomWithStorage(
      'myRomanceStep-page5',
      personalInitialData.myRomanceStep.page5,
    ),
  },
  preferInfoStep: {
    page1: atomWithStorage(
      'preferInfoStep-page1',
      personalInitialData.preferInfoStep.page1,
    ),
    page2: atomWithStorage(
      'preferInfoStep-page2',
      personalInitialData.preferInfoStep.page2,
    ),
    page3: atomWithStorage(
      'preferInfoStep-page3',
      personalInitialData.preferInfoStep.page3,
    ),
    page4: atomWithStorage(
      'preferInfoStep-page4',
      personalInitialData.preferInfoStep.page4,
    ),
  },
  personalPledgeStep: {
    page1: atomWithStorage(
      'personalPledgeStep-page1',
      personalInitialData.personalPledgeStep.page1,
    ),
  },
};
