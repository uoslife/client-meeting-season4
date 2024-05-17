import styled from '@emotion/styled';

const S = {
  StartButtonContainer: styled.div`
    width: 188px;
    height: 42px;
    height: 42px;
    padding: 12px 18px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 6px;
    background: #42b1cb;
  `,
  RouletteContainer: styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  ButtomArrowButtonWrapper: styled.div`
    margin-bottom: -12px;

    z-index: 2;
  `,
  BodyWrapper: styled.div<{ rotate: number }>`
    z-index: 1;

    transform: rotate(${({ rotate }) => rotate}deg);
  `,
  SupportWrapper: styled.div`
    margin-top: -48px;
  `,
  IrumaeWrapper: styled.div`
    position: absolute;
    bottom: -20px;
    left: -32px;

    z-index: 2;
  `,
};

export default S;
