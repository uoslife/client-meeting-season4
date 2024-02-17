import { SliderProps } from 'rc-slider';
import { useMemo, useState } from 'react';
import { RangeSliderProps } from '~/components/rangeSlider/RangeSlider';
import RangeSliderMarkText from '~/components/rangeSlider/RangeSliderMarkText';

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
  const [value, setValue] = useState<SliderProps['value']>([1, 2]);

  const onChange: SliderProps['onChange'] = value => {
    setValue(value);
  };

  const marks = useMemo(() => {
    const ret: RangeSliderProps['marks'] = {};

    for (let index = min; index <= max; index += markStep)
      ret[index] = <RangeSliderMarkText label={`${index}`} />;

    const minMarkIndex = Math.min(
      ...Object.keys(ret).map(item => Number(item)),
    );
    const maxMarkIndex = Math.max(
      ...Object.keys(ret).map(item => Number(item)),
    );

    if (minMarkPrefix)
      ret[minMarkIndex] = (
        <RangeSliderMarkText label={`${minMarkPrefix}${minMarkIndex}`} />
      );

    if (maxMarkPostfix)
      ret[maxMarkIndex] = (
        <RangeSliderMarkText label={`${maxMarkIndex}${maxMarkPostfix}`} />
      );

    return ret;
  }, [min, max, markStep, minMarkPrefix, maxMarkPostfix]);

  return {
    rangeValue: value,
    rangeSliderProps: { value, max, min, defaultValue, step, marks, onChange },
  };
};

export default useRangeSlider;
