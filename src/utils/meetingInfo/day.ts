// 월 -> 64, 화 -> 32, 수 -> 16, 목 -> 8, 금 -> 4, 토 -> 2, 일 -> 1

export const day_binaryIntoDayArray = (binaryData: number) => {
  const dayList = ['월', '화', '수', '목', '금', '토', '일'].reverse();
  const result = [];

  for (let i = 0; i < 7; i++)
    if (binaryData & (1 << i)) result.push(dayList[i]);

  return result;
};
