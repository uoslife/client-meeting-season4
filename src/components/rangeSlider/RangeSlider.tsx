import Slider, { SliderProps } from 'rc-slider';
import RangeSliderBackground from './RangeSliderBackground';
import RangeSliderHandle from './RangeSliderHandle';
import { HandlesProps } from 'rc-slider/lib/Handles';
import S from './RangeSlider.style';

export type RangeSliderProps = Pick<
  SliderProps,
  'min' | 'max' | 'step' | 'defaultValue' | 'value' | 'onChange' | 'marks'
>;

const handleRender: HandlesProps['handleRender'] = (origin, props) => (
  <S.CustomHandleContainer {...origin.props} {...props}>
    <RangeSliderHandle />
  </S.CustomHandleContainer>
);

const RangeSlider = ({
  min,
  max,
  step,
  defaultValue,
  value,
  marks,
  onChange,
}: RangeSliderProps) => {
  return (
    <S.Container>
      <S.BackgroundContainer>
        <RangeSliderBackground />
      </S.BackgroundContainer>
      <S.SliderContainer>
        <Slider
          range
          pushable
          {...{
            min,
            max,
            step,
            defaultValue,
            value,
            marks,
            onChange,
            handleRender,
          }}
        />
      </S.SliderContainer>
    </S.Container>
  );
};

export default RangeSlider;
