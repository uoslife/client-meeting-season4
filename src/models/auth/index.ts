import { atom } from 'jotai';

export const isLoggedInAtom = atom(false);
isLoggedInAtom.debugLabel = 'isLoggedIn';
