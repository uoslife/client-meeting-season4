// 동물상이나 관심사처럼 많은 데이터를 type으로 지정할 필요가 없는 경우 이곳에 입력합니다.
// 예를 들어, Header의 Home 아이콘, 랜딩 페이지의 카카오톡 아이콘 등.
export type normalType =
  | 'clearButton'
  | 'footerButton-right-able'
  | 'footerButton-right-disabled'
  | 'footerButton-left-able'
  | 'check'
  | 'headerButton-home'
  | 'headerButton-backArrow'
  | 'participationModal-human'
  | 'dropdown'
  | 'arrow-black'
  | 'checkCircle-active'
  | 'checkCircle-inactive'
  | 'musicNote-red'
  | 'share'
  | 'kakaotalk'
  | 'instagram'
  | 'next-icon-black'
  | 'human-circle'
  | 'errorButton'
  | 'delete';

// 동물상
export type animalKeyType =
  | 'dog'
  | 'cat'
  | 'rabbit'
  | 'fox'
  | 'bear'
  | 'hamster'
  | 'monkey'
  | 'dinosaur'
  | 'chick';
export type animalType = `animals/${animalKeyType}`;

// 관심사
export type interestKeyType =
  | 'reading'
  | 'game'
  | 'exercise'
  | 'traveling'
  | 'animal'
  | 'music'
  | 'drawing'
  | 'movie_drama'
  | 'fashion'
  | 'cooking';
export type interestType = `interests/${interestKeyType}`;

// 학교 선택
export type univSelectionKeyType = 'HUFS' | 'KHU' | 'UOS';
export type univSelectionType = `univSelection/${univSelectionKeyType}`;

export type directoryKeyType = 'directory' | 'directory-connector';
export type directoryType = `directory/${directoryKeyType}`;

export type iconType =
  | normalType
  | animalType
  | interestType
  | univSelectionType
  | directoryType;
