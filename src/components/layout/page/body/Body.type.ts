import React from 'react';
import { CardProps } from '~/components/card/Card';

export type BodyCardWrapperProps = {
  children: React.ReactNode;
};

export type BodyCardTheme = 'BG_WHITE' | 'BG_GREY';

export type SingleCardBodyProps = {
  children: React.ReactNode;
  theme?: BodyCardTheme;
  cardPadding?: CardProps['padding'];
};

export type DoubleCardBodyProps = {
  topCardChildren: React.ReactNode;
  bottomCardChildren: React.ReactNode;
  topCardPadding?: CardProps['padding'];
  bottomCardPadding?: CardProps['padding'];
};
