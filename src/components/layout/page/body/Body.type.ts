import React from 'react';

export type BodyCardWrapperProps = {
  children: React.ReactNode;
};

export type SingleCardBodyProps = {
  theme: 'BG_WHITE' | 'BG_GREY';
  children: React.ReactNode;
  cardPadding?: string;
};

export type DoubleCardBodyProps = {
  topCardChildren: React.ReactNode;
  bottomCardChildren: React.ReactNode;
};
