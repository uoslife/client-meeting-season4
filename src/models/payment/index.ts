import { atomWithStorage } from 'jotai/utils';

export const isPaymentFinishedAtom = atomWithStorage(
  'isPaymentFinished',
  false,
);
isPaymentFinishedAtom.debugLabel = 'isPaymentFinished';
