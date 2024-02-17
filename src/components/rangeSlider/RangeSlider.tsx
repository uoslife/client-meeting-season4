import Slider, { SliderProps } from 'rc-slider';
import './RangeSlider.css';
import styled from '@emotion/styled';
import RangeSliderBackground from './RangeSliderBackground';
import RangeSliderHandle from './RangeSliderHandle';
import { HandlesProps } from 'rc-slider/lib/Handles';

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
          handleRender={handleRender}
          min={min}
          max={max}
          step={step}
          dotStyle={{}}
          marks={marks}
          defaultValue={defaultValue}
          value={value}
          onChange={onChange}
        />
      </S.SliderContainer>
    </S.Container>
  );
};

export default RangeSlider;

const S = {
  Container: styled.div`
    position: relative;
    width: 100%;
    height: 15px;
    margin-top: 100px;
  `,
  BackgroundContainer: styled.div`
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    width: 100%;
    height: 100%;
  `,
  SliderContainer: styled.div`
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    width: 100%;
    height: 100%;
  `,
  CustomHandleContainer: styled.div`
    height: 150%;
  `,
};
