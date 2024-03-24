const mbtiOptions = ['E', 'I', 'S', 'N', 'T', 'F', 'J', 'P'];

export const getSortedMbtiArray = (mbti: string) => {
  return [...new Set([...mbti])] // 중복제거와 배열 변환(ex: "ESITFJ" -> ["E", "S", "I", "T", "F", "J"])
    .filter(el => mbtiOptions.includes(el)) // 옵션에 존재하는지 확인
    .sort((a, b) => (mbtiOptions.indexOf(a) > mbtiOptions.indexOf(b) ? 1 : -1)); // 정렬
};
