import { PersonalData, PersonalDataAtoms } from './data.type';
import { atomWithStorage } from 'jotai/utils';

export const personalInitialData: PersonalData = {
  myInformationStep: {
    page1: {
      nickname: '',
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
  pledgeStep: {
    page1: {
      checked: [false, false, false],
    },
  },
};

export const personalDataAtoms: PersonalDataAtoms = {
  myInformationStep: {
    page1: atomWithStorage(
      'personalMyInformationStep-page1',
      personalInitialData.myInformationStep.page1,
    ),
    page2: atomWithStorage(
      'personalMyInformationStep-page2',
      personalInitialData.myInformationStep.page2,
    ),
    page3: atomWithStorage(
      'personalMyInformationStep-page3',
      personalInitialData.myInformationStep.page3,
    ),
    page4: atomWithStorage(
      'personalMyInformationStep-page4',
      personalInitialData.myInformationStep.page4,
    ),
    page5: atomWithStorage(
      'personalMyInformationStep-page5',
      personalInitialData.myInformationStep.page5,
    ),
    page6: atomWithStorage(
      'personalMyInformationStep-page6',
      personalInitialData.myInformationStep.page6,
    ),
    page7: atomWithStorage(
      'personalMyInformationStep-page7',
      personalInitialData.myInformationStep.page7,
    ),
  },
  myRomanceStep: {
    page1: atomWithStorage(
      'personalMyRomanceStep-page1',
      personalInitialData.myRomanceStep.page1,
    ),
    page2: atomWithStorage(
      'personalMyRomanceStep-page2',
      personalInitialData.myRomanceStep.page2,
    ),
    page3: atomWithStorage(
      'personalMyRomanceStep-page3',
      personalInitialData.myRomanceStep.page3,
    ),
    page4: atomWithStorage(
      'personalMyRomanceStep-page4',
      personalInitialData.myRomanceStep.page4,
    ),
    page5: atomWithStorage(
      'personalMyRomanceStep-page5',
      personalInitialData.myRomanceStep.page5,
    ),
  },
  preferInfoStep: {
    page1: atomWithStorage(
      'personalPreferInfoStep-page1',
      personalInitialData.preferInfoStep.page1,
    ),
    page2: atomWithStorage(
      'personalPreferInfoStep-page2',
      personalInitialData.preferInfoStep.page2,
    ),
    page3: atomWithStorage(
      'personalPreferInfoStep-page3',
      personalInitialData.preferInfoStep.page3,
    ),
    page4: atomWithStorage(
      'personalPreferInfoStep-page4',
      personalInitialData.preferInfoStep.page4,
    ),
  },
  pledgeStep: {
    page1: atomWithStorage(
      'personalPledgeStep-page1',
      personalInitialData.pledgeStep.page1,
    ),
  },
};
