import { atom } from 'jotai';
import { ApplyData } from '~/types/apply.type';

export const meetingTypeAtom = atom<'group' | 'personal' | null>(null);
meetingTypeAtom.debugLabel = 'meetingTypeAtom';
export const univTypeAtom = atom<'HUFS' | 'KHU' | 'UOS' | null>(null);
univTypeAtom.debugLabel = 'univTypeAtom';

export type CommonState = {
  info_nickname: ApplyData<string>;
  info_gender: ApplyData<string>;
  info_age: ApplyData<number>;
  info_height: ApplyData<number>;
  info_kakaoId: ApplyData<string>;
  info_major: ApplyData<string>;
  info_studentType: ApplyData<string>;
};

export const initialCommonState: CommonState = {
  info_nickname: {
    title_kr: '닉네임',
    title_en: 'nickname',
    type: 'info',
    data: '',
  },
  info_gender: {
    title_kr: '성별',
    title_en: 'gender',
    type: 'info',
    data: '',
  },
  info_age: {
    title_kr: '나이',
    title_en: 'age',
    type: 'info',
    data: 0,
  },
  info_height: {
    title_kr: '키',
    title_en: 'height',
    type: 'info',
    data: 0,
  },
  info_kakaoId: {
    title_kr: '카카오톡 ID',
    title_en: 'kakaoId',
    type: 'info',
    data: '',
  },
  info_major: {
    title_kr: '학과',
    title_en: 'major',
    type: 'info',
    data: '',
  },
  info_studentType: {
    title_kr: '신분',
    title_en: 'studentType',
    type: 'info',
    data: '',
  },
};
