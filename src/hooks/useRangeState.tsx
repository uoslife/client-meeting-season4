import { useState } from 'react';
import { RangeValueType } from '~/components/rangeSlider/RangeSlider';

const useRangeState = (defaultValue: RangeValueType) => {
  const [rangeValue, setRangeValue] = useState<RangeValueType>(defaultValue);

  const rangeHandler = (value: RangeValueType) => {
    setRangeValue(value);
  };

  return { rangeValue, rangeHandler };
};

export default useRangeState;
