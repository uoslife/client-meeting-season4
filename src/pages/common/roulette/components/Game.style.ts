import styled from '@emotion/styled';

const S = {
  StartButtonContainer: styled.div<{ bgColor: string }>`
    width: 188px;
    height: 42px;
    height: 42px;
    padding: 12px 18px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 6px;
    background: ${({ bgColor }) => bgColor};
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
  BodyWrapper: styled.div`
    z-index: 1;
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
