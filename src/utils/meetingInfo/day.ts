// 월 -> 64, 화 -> 32, 수 -> 16, 목 -> 8, 금 -> 4, 토 -> 2, 일 -> 1

export const day_binaryIntoDayArray = (binaryData: number) => {
  const dayList = ['월', '화', '수', '목', '금', '토', '일'];
  const result = [];

  for (let i = 0; i < 7; i++)
    if (binaryData & (1 << i)) result.push(dayList[i]);

  return result;
};

export const day_dayArrayIntoBinary = (dayArray: string[]) => {
  const dayList = ['월', '화', '수', '목', '금', '토', '일'];
  let result = 0;

  for (let i = 0; i < dayArray.length; i++)
    result += 1 << dayList.indexOf(dayArray[i]);

  return result;
};
