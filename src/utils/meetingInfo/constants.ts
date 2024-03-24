import {
  SmokingOption,
  SpiritAnimalOption,
  StudentOption,
} from '~/api/types/user.type';
import { Univ } from '~/models/options';

export const SMOKING_MAP: { [key in SmokingOption]: string } = {
  TRUE: '흡연',
  FALSE: '비흡연',
  NOT_MATTER: '상관없음',
};

export const ANIMAL_MAP: { [key in SpiritAnimalOption]: string } = {
  BEAR: '곰',
  CAT: '고양이',
  DOG: '개',
  FOX: '여우',
  CHICK: '병아리',
  RABBIT: '토끼',
  DINOSAUR: '공룡',
  HAMSTER: '햄스터',
  MONKEY: '원숭이',
};

export const STUDENT_TYPE_MAP: { [key in StudentOption]: string } = {
  UNDERGRADUATE: '학부생',
  POSTGRADUATE: '대학원생',
  GRADUATE: '졸업생',
};

export const PERSONAL_ANSWER_OPTIONS = [
  ['친구같은 나으1 연인,,,', 'always,,, 두근ㄷH는 ㄴr의 마음,,,✫彡'],
  ['ㄴr만의 아ㅈi트에서,,, 단둘이,,,', 'ㅈi대 뽀ㄷH나는 곳에서 맛난거 먹쟈'],
  ['나와 지금 당장 해결해 자ㄱi야', '나에게 시간을 조금만 줘 Honey,,,'],
  ['필요할ㄸH만 연락할己ㅐ ࣪₊♡𓂃', '시ㅅi콜콜 일상을 공유ㅎr고 싶어'],
  ['ㄴH 마음을 매일 속삭일つㅓ야,,,♡⁼³', '내 눈빛으로 느껴ㅈi지 않ㅇr？'],
];

export const GROUP_ANSWER_OPTIONS = [
  [],
  ['활발ㅎŁ 편○l에요', 'ㅊr분ㅎŁ 편○l에요'],
  ['ㄷト같○l 술게임을 ㈛ヱ 싶ㄷr..', '술보ㄷト 너와의 ㄷН화가 ㈛ヱ 싶다..'],
  [
    '술보ㄷト 분우ιブløłl 취ㅎŁㄷト..',
    '술은 적당히 ㅁトんıヱ 싶øł..',
    '오늘은 취㈛ヱ 싶ㄷト..',
  ],
  [
    'ㄴr는 친구ㄱr 만들ヱ んı퍼',
    'レド는 ㅅГ랑에 언제LГ 목말ㄹr..',
    'レド는 뭐든 좋ㅇr',
  ],
];

export const UNIV_MAP: { [key in Univ]: string } = {
  HUFS: '한국외대',
  UOS: '서울시립대',
  KHU: '경희대',
};

export const ATMOSPHERE_MAP: {
  [key in 'ACTIVE' | 'CALM' | 'NOT_MATTER']: string;
} = { ACTIVE: '활발한', CALM: '차분한', NOT_MATTER: '둘 다 좋아요!' };
