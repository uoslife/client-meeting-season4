import styled from '@emotion/styled';
import { BodyCardTheme } from './Body.type';
import { CardStyleProps } from '~/components/card/Card';

export const getCardStyleProps = (theme: BodyCardTheme): CardStyleProps => ({
  backgroundColorName: theme === 'BG_GREY' ? 'Gray000' : 'White',
  borderWidth: theme === 'BG_GREY' ? 1 : 2,
  borderColorName: 'Gray500',
  borderRadius: 21,
});

export const S = {
  DashedLineOuterPadding: styled.main`
    padding: 0 5px 8px;

    display: flex;
    flex-direction: column;

    width: 100%;

    height: 0;
    flex: 1;
  `,
  DashedLinedWrapper: styled.div`
    border-image-slice: 15;
    border-image-width: 18px;
    border-image-repeat: repeat;
    border-image-source: url('/images/dashed-line-bg-white.png');

    height: 100%;
  `,
  SingleCardInnerPadding: styled.div`
    height: 100%;
    padding: 5px;

    display: flex;
    flex-direction: column;
  `,
  DoubleCardInnerPadding: styled.div`
    height: 100%;
    padding: 5px;

    display: flex;
    flex-direction: column;
  `,
  DoubleCardScrollArea: styled.div`
    border-radius: 18px;
    height: 100%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
  `,
  ConnectorWrapper: styled.div`
    padding: 0 10%;
    width: 100%;
    margin: -11px;
    z-index: 999;
  `,
};
