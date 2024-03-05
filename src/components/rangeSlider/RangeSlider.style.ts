import styled from '@emotion/styled';
import { colors } from '~/styles/colors';

const S = {
  EntireContainer: styled.div`
    position: relative;
    width: 100%;
    height: 36px;
  `,
  BackgroundContainer: styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 8px;
  `,
  SliderContainer: styled.div`
    position: absolute;
    top: 0;
    width: 100%;

    /* Origin: "node_modules\rc-slider\assets\index.css") */
    .rc-slider {
      position: relative;
      width: 100%;
      height: 100%;
      height: 8px;
      touch-action: none;
      display: flex;
      align-items: center;
    }
    .rc-slider * {
      box-sizing: border-box;
    }
    .rc-slider-track,
    .rc-slider-tracks {
      position: absolute;
      background: ${colors.LightBlue};
      height: 100%;
      border-radius: 0;
    }
    .rc-slider-track-draggable {
      z-index: 1;
      box-sizing: content-box;
      background-clip: content-box;
      border-top: 5px solid rgba(0, 0, 0, 0);
      border-bottom: 5px solid rgba(0, 0, 0, 0);
      transform: translateY(-5px);
    }
    .rc-slider-handle {
      position: absolute;
      z-index: 1;
      cursor: pointer;
      cursor: -webkit-grab;
      cursor: grab;
      touch-action: pan-x;
    }
    .rc-slider-handle:active {
      cursor: -webkit-grabbing;
      cursor: grabbing;
    }
    .rc-slider-mark-text {
      position: absolute;
      display: inline-block;
      color: ${colors.Secondary800};
      text-align: center;
      vertical-align: middle;
      cursor: pointer;
    }
  `,
  CustomHandleContainer: styled.div`
    height: 150%;
  `,
  MarkTextContainer: styled.div`
    padding-top: 12px;
  `,
};

export default S;
