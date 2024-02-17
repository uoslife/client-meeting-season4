import { SliderProps } from 'rc-slider';
import { useMemo, useState } from 'react';
import { RangeSliderProps } from '~/components/rangeSlider/RangeSlider';

type UseRangeSliderParams = Required<
  Pick<RangeSliderProps, 'min' | 'max' | 'defaultValue' | 'step'>
> & {
  markStep: number;
  minMarkPrefix?: string;
  maxMarkPostfix?: string;
};

type UseRangeSliderReturn = {
  rangeValue: RangeSliderProps['value'];
  rangeSliderProps: RangeSliderProps;
};

const useRangeSlider = ({
  min,
  max,
  defaultValue,
  step,
  markStep,
  minMarkPrefix,
  maxMarkPostfix,
}: UseRangeSliderParams): UseRangeSliderReturn => {
  const [value, setRangeValue] = useState<SliderProps['value']>([1, 2]);

  const onChange: SliderProps['onChange'] = value => {
    setRangeValue(value);
  };

  const marks = useMemo(() => {
    const ret: RangeSliderProps['marks'] = {};

    let i: number;
    for (i = min; i <= max; i += markStep) ret[i] = `${i}`;

    const minMarkIndex = 0;
    const maxMarkIndex = Math.max(
      ...Object.keys(ret).map(item => Number(item)),
    );

    if (minMarkPrefix) ret[minMarkIndex] = minMarkPrefix + ret[minMarkIndex];
    if (maxMarkPostfix) ret[maxMarkIndex] = ret[maxMarkIndex] + maxMarkPostfix;

    return ret;
  }, [min, max, markStep, minMarkPrefix, maxMarkPostfix]);

  return {
    rangeValue: value,
    rangeSliderProps: { value, max, min, defaultValue, step, marks, onChange },
  };
};

export default useRangeSlider;
