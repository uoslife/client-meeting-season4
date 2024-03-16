import { PersonalData, PersonalDataAtoms } from './data.type';
import { atomWithStorage } from 'jotai/utils';

export const personalInitialData: PersonalData = {
  personalMyInformationStep: {
    page1: {
      name: '',
      gender: null,
      age: '20',
      height: '180',
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
      mbti: [],
    },
    page6: {
      interestOptions: [],
    },
    page7: {
      message: '',
    },
  },
  personalMyRomanceStep: {
    page1: { answer: null },
    page2: { answer: null },
    page3: { answer: null },
    page4: { answer: null },
    page5: { answer: null },
  },
  personalPreferInfoStep: {
    page1: {
      ageRange: [20, 21],
      heightRange: [175, 185],
      studentTypes: [],
    },
    page2: {
      univs: [],
      religionOptions: [],
      smoking: null,
      drinkRange: [1, 2],
    },
    page3: { animalOptions: [] },
    page4: { mbtis: [[], [], [], []] },
  },
  personalPledgeStep: {
    page1: {
      checked: [false, false, false],
    },
  },
};

export const personalDataAtoms: PersonalDataAtoms = {
  personalMyInformationStep: {
    page1: atomWithStorage(
      'personalMyInformationStep-page1',
      personalInitialData.personalMyInformationStep.page1,
    ),
    page2: atomWithStorage(
      'personalMyInformationStep-page2',
      personalInitialData.personalMyInformationStep.page2,
    ),
    page3: atomWithStorage(
      'personalMyInformationStep-page3',
      personalInitialData.personalMyInformationStep.page3,
    ),
    page4: atomWithStorage(
      'personalMyInformationStep-page4',
      personalInitialData.personalMyInformationStep.page4,
    ),
    page5: atomWithStorage(
      'personalMyInformationStep-page5',
      personalInitialData.personalMyInformationStep.page5,
    ),
    page6: atomWithStorage(
      'personalMyInformationStep-page6',
      personalInitialData.personalMyInformationStep.page6,
    ),
    page7: atomWithStorage(
      'personalMyInformationStep-page7',
      personalInitialData.personalMyInformationStep.page7,
    ),
  },
  personalMyRomanceStep: {
    page1: atomWithStorage(
      'personalMyRomanceStep-page1',
      personalInitialData.personalMyRomanceStep.page1,
    ),
    page2: atomWithStorage(
      'personalMyRomanceStep-page2',
      personalInitialData.personalMyRomanceStep.page2,
    ),
    page3: atomWithStorage(
      'personalMyRomanceStep-page3',
      personalInitialData.personalMyRomanceStep.page3,
    ),
    page4: atomWithStorage(
      'personalMyRomanceStep-page4',
      personalInitialData.personalMyRomanceStep.page4,
    ),
    page5: atomWithStorage(
      'personalMyRomanceStep-page5',
      personalInitialData.personalMyRomanceStep.page5,
    ),
  },
  personalPreferInfoStep: {
    page1: atomWithStorage(
      'personalPreferInfoStep-page1',
      personalInitialData.personalPreferInfoStep.page1,
    ),
    page2: atomWithStorage(
      'personalPreferInfoStep-page2',
      personalInitialData.personalPreferInfoStep.page2,
    ),
    page3: atomWithStorage(
      'personalPreferInfoStep-page3',
      personalInitialData.personalPreferInfoStep.page3,
    ),
    page4: atomWithStorage(
      'personalPreferInfoStep-page4',
      personalInitialData.personalPreferInfoStep.page4,
    ),
  },
  personalPledgeStep: {
    page1: atomWithStorage(
      'personalPledgeStep-page1',
      personalInitialData.personalPledgeStep.page1,
    ),
  },
};
