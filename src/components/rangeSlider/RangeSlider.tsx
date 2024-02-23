import Slider, { SliderProps } from 'rc-slider';
import RangeSliderBackground from './RangeSliderBackground';
import RangeSliderHandle from './RangeSliderHandle';
import { HandlesProps } from 'rc-slider/lib/Handles';
import S from './RangeSlider.style';
import { useMemo } from 'react';
import RangeSliderMarkText from './RangeSliderMarkText';

export type RangeValueType = [number, number];

export type RangeSliderProps = Required<
  Pick<SliderProps, 'min' | 'max' | 'step'>
> & {
  minMarkPrefix?: string;
  maxMarkPostfix?: string;
  markStep: number;
  value: RangeValueType;
  onChange: (value: RangeValueType) => void;
};

const handleRender: HandlesProps['handleRender'] = (origin, props) => (
  <S.CustomHandleContainer {...origin.props} {...props}>
    <RangeSliderHandle />
  </S.CustomHandleContainer>
);

const RangeSlider = ({
  min,
  max,
  step,
  value,
  minMarkPrefix,
  maxMarkPostfix,
  markStep,
  onChange,
}: RangeSliderProps) => {
  const marks = useMemo(() => {
    const ret: SliderProps['marks'] = {};

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

  return (
    <S.EntireContainer>
      <S.BackgroundContainer>
        <RangeSliderBackground />
      </S.BackgroundContainer>
      <S.SliderContainer>
        <Slider
          range
          pushable
          min={min}
          max={max}
          step={step}
          value={value}
          marks={marks}
          handleRender={handleRender}
          onChange={onChange as SliderProps['onChange']}
        />
      </S.SliderContainer>
    </S.EntireContainer>
  );
};

export default RangeSlider;
