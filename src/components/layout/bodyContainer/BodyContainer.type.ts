import { ConnectedTwoCardsProps } from '~/components/card/connectedTwoCards/ConnectedTwoCards';

export type BodyProps =
  | {
      bodyCardType: 'SINGLE_BG_WHITE' | 'SINGLE_BG_GREY';
      children: React.ReactNode;
    }
  | ({
      bodyCardType: 'DOUBLE';
    } & Pick<ConnectedTwoCardsProps, 'bottomCardChildren' | 'topCardChildren'>);

export type BodyCardType = BodyProps['bodyCardType'];
