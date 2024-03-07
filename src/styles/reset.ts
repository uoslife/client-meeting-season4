import { css } from '@emotion/react';
import NeoDunggeunmoPro from '/fonts/NeoDunggeunmoPro-Regular.ttf';
import DOSGothic from '/fonts/DOSGothic.ttf';
import PretendardRegular from '/fonts/Pretendard-Regular.ttf';
import GothicA1Regular from '/fonts/GothicA1-Regular.ttf';
import LeferiBaseRegular from '/fonts/LeferiBaseBold.ttf';

const reset = css`
  * {
    margin: 0;
    padding: 0;
    font: inherit;
    color: inherit;
  }
  *,
  :after,
  :before {
    box-sizing: border-box;
  }
  :root {
    -webkit-tap-highlight-color: transparent;
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
    cursor: default;
    line-height: 1.5;
    overflow-wrap: break-word;
    -moz-tab-size: 4;
    tab-size: 4;
  }
  html,
  body {
    height: 100dvh;
    width: 100dvw;
    display: flex;
    justify-content: center;
    background-color: #888888;
  }
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
  button {
    background: none;
    border: 0;
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  @font-face {
    font-family: 'LeferiBaseType-RegularA';
    src: url(${LeferiBaseRegular}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'GothicA1Type-Regular';
    src: url(${GothicA1Regular}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'NeoDunggeunmoProType-Regular';
    src: url(${NeoDunggeunmoPro}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'DOSGothic-Regular';
    src: url(${DOSGothic}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'PretendardType-Regular';
    src: url(${PretendardRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;

export default reset;
