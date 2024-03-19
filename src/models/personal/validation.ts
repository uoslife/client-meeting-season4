import { atom } from 'jotai';
import { personalDataAtoms } from './data';
import { PersonalValidator, PersonalValidites } from './validation.type';

// used to check validity
export const personalValidators: PersonalValidator = {
  personalMyInformationStep: {
    page1: ({ name, gender, age, height }) =>
      name !== '' && !!gender && !!age && !!height,
    page2: ({ kakaoId, major, phone, studentType }) =>
      kakaoId !== '' && phone !== '' && major !== '' && !!studentType,
    page3: ({ religion, smoking }) => !!religion && smoking !== null,
    page4: ({ animalOptions }) => animalOptions.length > 0,
    page5: ({ mbti }) => {
      return (
        ['E', 'I'].some(prop => mbti.includes(prop)) &&
        ['N', 'S'].some(prop => mbti.includes(prop)) &&
        ['T', 'F'].some(prop => mbti.includes(prop)) &&
        ['P', 'J'].some(prop => mbti.includes(prop))
      );
    },
    page6: ({ interestOptions }) => interestOptions.length === 3,
    page7: ({ message }) => message.length >= 10,
  },
  personalMyRomanceStep: {
    page1: ({ answer }) => answer !== null,
    page2: ({ answer }) => answer !== null,
    page3: ({ answer }) => answer !== null,
    page4: ({ answer }) => answer !== null,
    page5: ({ answer }) => answer !== null,
  },
  personalPledgeStep: {
    page1: ({ checked }) => checked.every(check => check),
  },
  personalPreferInfoStep: {
    page1: ({ studentTypes }) => studentTypes.length > 0,
    page2: ({ religionOptions, smoking, univs }) =>
      univs.length > 0 && religionOptions.length > 0 && smoking !== null,
    page3: ({ animalOptions }) => animalOptions.length > 0,
    page4: ({ mbtis }) => {
      return (
        ['E', 'I'].some(prop => mbtis.includes(prop)) &&
        ['N', 'S'].some(prop => mbtis.includes(prop)) &&
        ['T', 'F'].some(prop => mbtis.includes(prop)) &&
        ['P', 'J'].some(prop => mbtis.includes(prop))
      );
    },
  },
};

// holds entire Validity, read-only, entire level
export const personalValiditiesAtom = atom<PersonalValidites>(get => ({
  personalMyInformationStep: {
    page1: personalValidators.personalMyInformationStep.page1(
      get(personalDataAtoms.personalMyInformationStep.page1),
    ),
    page2: personalValidators.personalMyInformationStep.page2(
      get(personalDataAtoms.personalMyInformationStep.page2),
    ),
    page3: personalValidators.personalMyInformationStep.page3(
      get(personalDataAtoms.personalMyInformationStep.page3),
    ),
    page4: personalValidators.personalMyInformationStep.page4(
      get(personalDataAtoms.personalMyInformationStep.page4),
    ),
    page5: personalValidators.personalMyInformationStep.page5(
      get(personalDataAtoms.personalMyInformationStep.page5),
    ),
    page6: personalValidators.personalMyInformationStep.page6(
      get(personalDataAtoms.personalMyInformationStep.page6),
    ),
    page7: personalValidators.personalMyInformationStep.page7(
      get(personalDataAtoms.personalMyInformationStep.page7),
    ),
  },
  personalMyRomanceStep: {
    page1: personalValidators.personalMyRomanceStep.page1(
      get(personalDataAtoms.personalMyRomanceStep.page1),
    ),
    page2: personalValidators.personalMyRomanceStep.page2(
      get(personalDataAtoms.personalMyRomanceStep.page2),
    ),
    page3: personalValidators.personalMyRomanceStep.page3(
      get(personalDataAtoms.personalMyRomanceStep.page3),
    ),
    page4: personalValidators.personalMyRomanceStep.page4(
      get(personalDataAtoms.personalMyRomanceStep.page4),
    ),
    page5: personalValidators.personalMyRomanceStep.page5(
      get(personalDataAtoms.personalMyRomanceStep.page5),
    ),
  },
  personalPledgeStep: {
    page1: personalValidators.personalPledgeStep.page1(
      get(personalDataAtoms.personalPledgeStep.page1),
    ),
  },
  personalPreferInfoStep: {
    page1: personalValidators.personalPreferInfoStep.page1(
      get(personalDataAtoms.personalPreferInfoStep.page1),
    ),
    page2: personalValidators.personalPreferInfoStep.page2(
      get(personalDataAtoms.personalPreferInfoStep.page2),
    ),
    page3: personalValidators.personalPreferInfoStep.page3(
      get(personalDataAtoms.personalPreferInfoStep.page3),
    ),
    page4: personalValidators.personalPreferInfoStep.page4(
      get(personalDataAtoms.personalPreferInfoStep.page4),
    ),
  },
}));
