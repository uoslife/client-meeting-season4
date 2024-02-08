// 동물상이나 관심사처럼 많은 데이터를 type으로 지정할 필요가 없는 경우 이곳에 입력합니다.
// 예를 들어, Header의 Home 아이콘, 랜딩 페이지의 카카오톡 아이콘 등.
type normalType = 'vite';

// 동물상 관련 타입 지정입니다. 'dog' | 'cat' 이런 식으로 작성해주시면 됩니다.
type animalType = '';

// 관심사 관련 타입 지정입니다. 'book' | 'game' 이런 식으로 작성해주시면 됩니다.
type interestType = '';

export type iconType = normalType | animalType | interestType;
