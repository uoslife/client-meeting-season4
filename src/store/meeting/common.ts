import { atom } from 'jotai';

export const meetingTypeAtom = atom<'group' | 'personal' | null>(null);
meetingTypeAtom.debugLabel = 'meetingTypeAtom';
export const univTypeAtom = atom<'HUFS' | 'KHU' | 'UOS' | null>(null);
univTypeAtom.debugLabel = 'univTypeAtom';

export type CommonState = {
  info_nickname: string;
  info_gender: string;
  info_age: number;
  info_height: number;
  info_kakaoId: string;
  info_major: string;
  info_studentType: string;
};

export const initialCommonState: CommonState = {
  info_nickname: '',
  info_gender: '',
  info_age: 0,
  info_height: 0,
  info_kakaoId: '',
  info_major: '',
  info_studentType: '',
};
