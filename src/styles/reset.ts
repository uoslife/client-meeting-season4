import { css } from '@emotion/react';

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
    overscroll-behavior: none;
  }
  ::-webkit-scrollbar {
    display: none;
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
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/LeferiPoint-BlackA.woff')
      format('woff');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'GothicA1Type-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2205@1.0/GothicA1-Regular.woff2')
      format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'GothicA1Type-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2205@1.0/GothicA1-Bold.woff2')
      format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'NeoDunggeunmoProType-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/NeoDunggeunmoPro-Regular.woff2')
      format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'DOSGothic-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_eight@1.0/DOSGothic.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'PretendardType-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;

export default reset;
