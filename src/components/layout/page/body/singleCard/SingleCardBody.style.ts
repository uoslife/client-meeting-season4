import styled from '@emotion/styled';

const S = {
  DashedLineOuterPadding: styled.div`
    padding: 0 5px 8px;

    display: flex;
    flex-direction: column;

    width: 100%;

    height: 0;
    flex: 1;

    position: relative;
  `,
  DashedLinedWrapper: styled.div`
    border-image-slice: 15;
    border-image-width: 18px;
    border-image-repeat: repeat;
    border-image-source: url('/images/dashed-line-bg-white.png');

    height: 100%;
  `,
  DashedInnerPadding: styled.div`
    height: 100%;
    padding: 5px;

    display: flex;

    flex-direction: column;
    flex: 1;
  `,
  ConnectorWrapper: styled.div`
    padding: 0 10%;
    width: 100%;
    margin: -11px;
    z-index: 999;
  `,
};

export default S;
