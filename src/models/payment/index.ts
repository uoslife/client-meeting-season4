import { atom } from 'jotai';

export const isPaymentFinishedAtom = atom(false);
isPaymentFinishedAtom.debugLabel = 'isPaymentFinished';
