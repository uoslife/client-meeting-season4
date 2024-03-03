import { ApplyQuestionArrType } from '~/types/apply.type';
import { CommonApplyAtoms, CommonApplyInfo, commonApplyAtoms } from '.';
import { atomWithStorage } from 'jotai/utils';

export type PersonalApplyInfo = {
  personalInfo_drink: string[];
  personalInfo_religion: string;
  personalInfo_smoking: string;
  personalInfo_animal: string[];
  personalInfo_mbti: string[];
  personalInfo_interests: string[];
  personalInfo_question: ApplyQuestionArrType;
  personalPrefer_age: string[];
  personalPrefer_height: string[];
  personalPrefer_studentType: string[];
  personalPrefer_univ: string[];
  personalPrefer_drink: string[];
  personalPrefer_religion: string;
  personalPrefer_smoking: string;
  personalPrefer_animal: string[];
  personalPrefer_mbti: string[];
} & CommonApplyInfo;

export type PesronalApplyAtoms = {
  [key in keyof PersonalApplyInfo]: ReturnType<
    typeof atomWithStorage<PersonalApplyInfo[key]>
  >;
} & CommonApplyAtoms;

export const personalApplyAtoms: PesronalApplyAtoms = {
  ...commonApplyAtoms,
  personalInfo_drink: atomWithStorage('personalInfo_drink', ['']),
  personalInfo_smoking: atomWithStorage('personalInfo_smoking', ''),
  personalInfo_religion: atomWithStorage('personalInfo_religion', ''),
  personalInfo_animal: atomWithStorage('personalInfo_animal', ['']),
  personalInfo_mbti: atomWithStorage('personalInfo_mbti', ['', '', '', '']),
  personalInfo_interests: atomWithStorage('personalInfo_interests', ['']),
  personalInfo_question: atomWithStorage('personalInfo_question', [
    { label: '', order: 0 },
    { label: '', order: 1 },
    { label: '', order: 2 },
    { label: '', order: 3 },
    { label: '', order: 4 },
  ]),
  personalPrefer_age: atomWithStorage('personalPrefer_age', ['']),
  personalPrefer_height: atomWithStorage('personalPrefer_height', ['']),
  personalPrefer_studentType: atomWithStorage('personalPrefer_studentType', [
    '',
  ]),
  personalPrefer_univ: atomWithStorage('personalPrefer_univ', ['']),
  personalPrefer_smoking: atomWithStorage('personalPrefer_smoking', ''),
  personalPrefer_religion: atomWithStorage('personalPrefer_religion', ''),
  personalPrefer_drink: atomWithStorage('personalPrefer_drink', ['']),
  personalPrefer_animal: atomWithStorage('personalPrefer_animal', ['']),
  personalPrefer_mbti: atomWithStorage('personalPrefer_mbti', ['']),
};

for (const key in personalApplyAtoms) {
  personalApplyAtoms[key as keyof PesronalApplyAtoms].debugLabel = key;
}
