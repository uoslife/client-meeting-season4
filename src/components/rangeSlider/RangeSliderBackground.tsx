import styled from '@emotion/styled';
import { memo } from 'react';
import { colors } from '~/styles/colors';
import { colorType } from '~/types/style.type';

const RangeSliderBackground = memo(() => {
  const rowProps = getRowProps();

  return (
    <S.Container>
      {rowProps.map(styles => (
        <S.BackgroundRow {...styles} />
      ))}
    </S.Container>
  );
});

export default RangeSliderBackground;

type SBackgroundRowProps = {
  backgroundColorName: colorType;
  widthSubtrahend: number;
};

const getRowProps = () => {
  const rowCount = 8;
  const ret: SBackgroundRowProps[] = Array.from({ length: rowCount }, () => ({
    backgroundColorName: 'Blue',
    widthSubtrahend: 0,
  }));

  for (let i = 0; i < 3; i++) ret[i].backgroundColorName = 'Gray100';
  for (let i = 3; i < 6; i++) ret[i].backgroundColorName = 'Gray200';
  for (let i = 6; i < 8; i++) ret[i].backgroundColorName = 'Gray300';

  ret[0].widthSubtrahend = ret[rowCount - 1 - 0].widthSubtrahend = 2.5;
  ret[1].widthSubtrahend = ret[rowCount - 1 - 1].widthSubtrahend = 1.5;
  ret[2].widthSubtrahend = ret[rowCount - 1 - 2].widthSubtrahend = 0.5;
  ret[3].widthSubtrahend = ret[rowCount - 1 - 3].widthSubtrahend = 0;

  return ret;
};

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  `,
  BackgroundRow: styled.div<SBackgroundRowProps>`
    flex: 1;
    background-color: ${({ backgroundColorName }) =>
      colors[backgroundColorName]};
    width: ${({ widthSubtrahend }) => `${100 - widthSubtrahend}%`};
  `,
};
