import { atom } from 'jotai';
import { personalDataAtoms } from './data';
import { PersonalValidator, PersonalValidites } from './validation.type';

// used to check validity
export const personalValidators: PersonalValidator = {
  personalMyInfoStep: {
    page1: ({ nickname, gender, age, height }) =>
      nickname !== '' && !!gender && !!age && !!height,
    page2: ({ kakaoId, major, phone, studentType }) =>
      kakaoId !== '' && phone !== '' && major !== '' && !!studentType,
    page3: ({ religion, smoking }) => !!religion && smoking !== null,
    page4: ({ animalOptions }) => animalOptions.length > 0,
    page5: ({ mbti }) => !!mbti,
    page6: ({ interestOptions }) => interestOptions.length === 0,
    page7: ({ message }) => !!message,
  },
  myRomanceStep: {
    page1: ({ answer }) => !!answer,
    page2: ({ answer }) => !!answer,
    page3: ({ answer }) => !!answer,
    page4: ({ answer }) => !!answer,
    page5: ({ answer }) => !!answer,
  },
  personalPledgeStep: {
    page1: ({ checked }) => checked.every(check => check),
  },
  preferInfoStep: {
    page1: ({ studentTypes }) => studentTypes.length > 0,
    page2: ({ religionOptions, smokingOptions, univs }) =>
      univs.length > 0 &&
      religionOptions.length > 0 &&
      smokingOptions.length > 0,
    page3: ({ animalOptions }) => animalOptions.length > 0,
    page4: ({ mbtiOptions }) => mbtiOptions.length > 0,
  },
};

// holds entire Validity, read-only, entire level
export const personalValiditiesAtom = atom<PersonalValidites>(get => ({
  personalMyInfoStep: {
    page1: personalValidators.personalMyInfoStep.page1(
      get(personalDataAtoms.personalMyInfoStep.page1),
    ),
    page2: personalValidators.personalMyInfoStep.page2(
      get(personalDataAtoms.personalMyInfoStep.page2),
    ),
    page3: personalValidators.personalMyInfoStep.page3(
      get(personalDataAtoms.personalMyInfoStep.page3),
    ),
    page4: personalValidators.personalMyInfoStep.page4(
      get(personalDataAtoms.personalMyInfoStep.page4),
    ),
    page5: personalValidators.personalMyInfoStep.page5(
      get(personalDataAtoms.personalMyInfoStep.page5),
    ),
    page6: personalValidators.personalMyInfoStep.page6(
      get(personalDataAtoms.personalMyInfoStep.page6),
    ),
    page7: personalValidators.personalMyInfoStep.page7(
      get(personalDataAtoms.personalMyInfoStep.page7),
    ),
  },
  myRomanceStep: {
    page1: personalValidators.myRomanceStep.page1(
      get(personalDataAtoms.myRomanceStep.page1),
    ),
    page2: personalValidators.myRomanceStep.page2(
      get(personalDataAtoms.myRomanceStep.page2),
    ),
    page3: personalValidators.myRomanceStep.page3(
      get(personalDataAtoms.myRomanceStep.page3),
    ),
    page4: personalValidators.myRomanceStep.page4(
      get(personalDataAtoms.myRomanceStep.page4),
    ),
    page5: personalValidators.myRomanceStep.page5(
      get(personalDataAtoms.myRomanceStep.page5),
    ),
  },
  personalPledgeStep: {
    page1: personalValidators.personalPledgeStep.page1(
      get(personalDataAtoms.personalPledgeStep.page1),
    ),
  },
  preferInfoStep: {
    page1: personalValidators.preferInfoStep.page1(
      get(personalDataAtoms.preferInfoStep.page1),
    ),
    page2: personalValidators.preferInfoStep.page2(
      get(personalDataAtoms.preferInfoStep.page2),
    ),
    page3: personalValidators.preferInfoStep.page3(
      get(personalDataAtoms.preferInfoStep.page3),
    ),
    page4: personalValidators.preferInfoStep.page4(
      get(personalDataAtoms.preferInfoStep.page4),
    ),
  },
}));
