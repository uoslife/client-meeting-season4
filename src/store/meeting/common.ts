import { atom } from 'jotai';

export const meetingTypeAtom = atom<'group' | 'personal' | null>(null);
meetingTypeAtom.debugLabel = 'meetingTypeAtom';
export const univTypeAtom = atom<'HUFS' | 'KHU' | 'UOS' | null>(null);
univTypeAtom.debugLabel = 'univTypeAtom';

export type CommonApplyInfo = {
  info_nickname: string;
  info_gender: string;
  info_age: number;
  info_height: number;
  info_kakaoId: string;
  info_major: string;
  info_studentType: string;
};

export type CommonApplyAtoms = {
  [key in keyof CommonApplyInfo]: ReturnType<typeof atom<CommonApplyInfo[key]>>;
};

export const commonApplyAtoms: CommonApplyAtoms = {
  info_nickname: atom(''),
  info_gender: atom(''),
  info_age: atom(0),
  info_height: atom(0),
  info_kakaoId: atom(''),
  info_major: atom(''),
  info_studentType: atom(''),
};
