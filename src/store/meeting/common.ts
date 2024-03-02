import { PrimitiveAtom } from 'jotai/vanilla';
import { atomWithStorage } from 'jotai/utils';

export const meetingTypeAtom = atomWithStorage<'group' | 'personal' | null>(
  'meeting_type',
  null,
);
meetingTypeAtom.debugLabel = 'meetingTypeAtom';
export const univTypeAtom = atomWithStorage<'HUFS' | 'KHU' | 'UOS' | null>(
  'univ_type',
  null,
);
univTypeAtom.debugLabel = 'univTypeAtom';

export const meetingTypeCheckAtom = atomWithStorage('meetingTypeCheck', [
  false,
  false,
]);
meetingTypeCheckAtom.debugLabel = 'meetingTypeCheckAtom';

export type CommonApplyInfo = {
  myInfo_nickname: string;
  myInfo_gender: string;
  myInfo_age: number;
  myInfo_height: number;
  myInfo_kakaoId: string;
  myInfo_major: string;
  myInfo_studentType: string;
};

export type CommonApplyAtoms = {
  [key in keyof CommonApplyInfo]: PrimitiveAtom<CommonApplyInfo[key]>;
};

export const commonApplyAtoms: CommonApplyAtoms = {
  myInfo_nickname: atomWithStorage('myInfo_nickname', ''),
  myInfo_gender: atomWithStorage('myInfo_gender', ''),
  myInfo_age: atomWithStorage('myInfo_age', 0),
  myInfo_height: atomWithStorage('myInfo_height', 0),
  myInfo_kakaoId: atomWithStorage('myInfo_kakaoId', ''),
  myInfo_major: atomWithStorage('myInfo_major', ''),
  myInfo_studentType: atomWithStorage('myInfo_studentType', ''),
};
