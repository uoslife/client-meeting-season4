import { atom } from 'jotai';
import { PersonalData } from './type';

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
    page1: atom(personalInitialData.personalMyInfoStep.page1),
    page2: atom(personalInitialData.personalMyInfoStep.page2),
    page3: atom(personalInitialData.personalMyInfoStep.page3),
    page4: atom(personalInitialData.personalMyInfoStep.page4),
    page5: atom(personalInitialData.personalMyInfoStep.page5),
    page6: atom(personalInitialData.personalMyInfoStep.page6),
    page7: atom(personalInitialData.personalMyInfoStep.page7),
  },
  myRomanceStep: {
    page1: atom(personalInitialData.myRomanceStep.page1),
    page2: atom(personalInitialData.myRomanceStep.page2),
    page3: atom(personalInitialData.myRomanceStep.page3),
    page4: atom(personalInitialData.myRomanceStep.page4),
    page5: atom(personalInitialData.myRomanceStep.page5),
  },
  preferInfoStep: {
    page1: atom(personalInitialData.preferInfoStep.page1),
    page2: atom(personalInitialData.preferInfoStep.page2),
    page3: atom(personalInitialData.preferInfoStep.page3),
    page4: atom(personalInitialData.preferInfoStep.page4),
  },
  personalPledgeStep: {
    page1: atom(personalInitialData.personalPledgeStep.page1),
  },
};
