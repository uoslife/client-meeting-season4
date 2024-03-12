import { atomWithStorage } from 'jotai/utils';
import { InfoOptions } from '~/models/options';

export type PersonalData = {
  // 01. 나의 정보 입력하기
  myInformationStep: {
    page1: Pick<
      InfoOptions,
      | 'nickname' // 1
      | 'gender' // 2
      | 'age' // 3
      | 'height' // 4
    >;
    page2: Pick<
      InfoOptions,
      | 'kakaoId' // 5
      | 'phone' // 6
      | 'major' // 7
      | 'studentType' // 8
    >;
    page3: Pick<
      InfoOptions,
      | 'religion' // 9
      | 'smoking' // 10
      | 'drinkRange' // 11
    >;
    page4: Pick<
      InfoOptions,
      'animalOptions' // 12
    >;
    page5: Pick<
      InfoOptions,
      'mbti' // 13
    >;
    page6: Pick<
      InfoOptions,
      'interestOptions' // 14
    >;
    page7: Pick<
      InfoOptions,
      'message' // 15
    >;
  };
  // 02. 나의 연애 스타일 알아보기
  myRomanceStep: {
    [key in 'page1' | 'page2' | 'page3' | 'page4' | 'page5']: {
      answer: null | 0 | 1;
    };
  };
  // 03. 선호하는 상대 정보 입력하기
  preferInfoStep: {
    page1: Pick<
      InfoOptions,
      | 'ageRange' // 1
      | 'heightRange' // 2
      | 'studentTypes' // 3
    >;
    page2: Pick<
      InfoOptions,
      | 'univs' // 4
      | 'religionOptions' // 5
      | 'smokingOptions' // 6
      | 'drinkRange' // 7
    >;
    page3: Pick<
      InfoOptions,
      'animalOptions' // 8
    >;
    page4: Pick<
      InfoOptions,
      'mbtiOptions' // 9
    >;
  };
  // 04. 시대팅 이용 서약
  pledgeStep: {
    page1: {
      checked: [boolean, boolean, boolean];
    };
  };
};

export type PersonalDataAtoms = {
  [key1 in keyof PersonalData]: {
    [key2 in keyof PersonalData[key1]]: ReturnType<
      typeof atomWithStorage<PersonalData[key1][key2]>
    >;
  };
};
