import { interestKeyType } from '~/types/icon.type';

export type Univ = 'HUFS' | 'KHU' | 'UOS';

export type GenderOption = 'F' | 'M';

export type StudentOption = '학부생' | '대학원생' | '졸업생';

export type ReligionOption = '기독교' | '천주교' | '불교' | '무교' | '기타';

export type AnimalOption =
  | 'dog'
  | 'cat'
  | 'rabbit'
  | 'fox'
  | 'bear'
  | 'hamster'
  | 'monkey'
  | 'dinosaur'
  | 'chick';

export type MBTIOption = string; // TODO: 백엔드와 협의 후 변경

export type PreferDay = string;

export type InfoOptions = {
  nickname: string;
  gender: null | GenderOption;
  age: string;
  ageRange: [number, number];
  height: string;
  heightRange: [number, number];
  kakaoId: string;
  phone: string;
  major: string;
  studentType: null | StudentOption;
  religion: null | ReligionOption;
  religionOptions: ReligionOption[];
  smoking: null | boolean;
  smokingOptions: boolean[];
  drinkRange: [number, number];
  animalOptions: AnimalOption[];
  mbti: string[] | MBTIOption;
  mbtiOptions: MBTIOption[];
  univs: Univ[];
  studentTypes: StudentOption[];
  interestOptions: interestKeyType[];
  message: string;
  atmosphere: string;
  preferDayOptions: PreferDay[];
};
