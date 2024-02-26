import { atom } from 'jotai';
import { PrimitiveAtom } from 'jotai/vanilla';

export const meetingTypeAtom = atom<'group' | 'personal' | null>(null);
meetingTypeAtom.debugLabel = 'meetingTypeAtom';
export const univTypeAtom = atom<'HUFS' | 'KHU' | 'UOS' | null>(null);
univTypeAtom.debugLabel = 'univTypeAtom';

export type CommonState = {
  info_nickname: PrimitiveAtom<string>;
  info_gender: PrimitiveAtom<string>;
  info_age: PrimitiveAtom<number>;
  info_height: PrimitiveAtom<number>;
  info_kakaoId: PrimitiveAtom<string>;
  info_major: PrimitiveAtom<string>;
  info_studentType: PrimitiveAtom<string>;
};

export const commonAtoms: CommonState = {
  info_nickname: atom(''),
  info_gender: atom(''),
  info_age: atom(0),
  info_height: atom(0),
  info_kakaoId: atom(''),
  info_major: atom(''),
  info_studentType: atom(''),
};
