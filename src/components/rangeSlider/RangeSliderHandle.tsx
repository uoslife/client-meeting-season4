import styled from '@emotion/styled';
import { memo } from 'react';
import { colors } from '~/styles/colors';
import { colorType } from '~/types/style.type';

const RangeSliderHandle = memo(() => {
  return (
    <S.Container>
      <Row1 />
      <Row2 />
      <Row3 />
      <Row3 />
      <Row3 />
      <Row2 />
      <Row1 />
    </S.Container>
  );
});

export default RangeSliderHandle;

const Row1 = () => {
  const ret = [];
  for (let i = 0; i < 2; i++) ret.push(<S.DotItem />);
  for (let i = 0; i < 6; i++) ret.push(<S.DotItem background="Gray500" />);
  for (let i = 0; i < 2; i++) ret.push(<S.DotItem />);

  return ret;
};
const Row2 = () => {
  const ret = [];
  for (let i = 0; i < 1; i++) ret.push(<S.DotItem />);
  for (let i = 0; i < 1; i++) ret.push(<S.DotItem background="Gray500" />);
  for (let i = 0; i < 6; i++) ret.push(<S.DotItem background="White" />);
  for (let i = 0; i < 1; i++) ret.push(<S.DotItem background="Gray500" />);
  for (let i = 0; i < 1; i++) ret.push(<S.DotItem />);

  return ret;
};
const Row3 = () => {
  const ret = [];
  for (let i = 0; i < 1; i++) ret.push(<S.DotItem background="Gray500" />);
  for (let i = 0; i < 8; i++) ret.push(<S.DotItem background="White" />);
  for (let i = 0; i < 1; i++) ret.push(<S.DotItem background="Gray500" />);

  return ret;
};

type DotProps = {
  background?: colorType;
};

const S = {
  Container: styled.div`
    height: 100%;
    aspect-ratio: 10/7;

    display: grid;
    grid-template-rows: repeat(7, 1fr);
    grid-template-columns: repeat(10, 1fr);
  `,
  DotItem: styled.div<DotProps>`
    background-color: ${({ background }) =>
      background ? colors[background] : 'transparent'};
  `,
};
