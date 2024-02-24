export type ApplyQuestionArrType = Array<{ label: string; order: number }>;

export type ApplyDataType = number | string | string[] | ApplyQuestionArrType;

export type ApplyData<T extends ApplyDataType> = {
  title_kr: string;
  title_en: string;
  type: 'info' | 'prefer';
  data: T;
};

export type ApplyDataArr = Array<ApplyData<ApplyDataType>>;
