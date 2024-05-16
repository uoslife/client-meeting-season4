import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export const isLoggedInAtom = atomWithStorage('isLoggedInAtom', false);
isLoggedInAtom.debugLabel = 'isLoggedIn';

//@ts-expect-error: window has ReactNativeWebview
const isFromUoslifeWebView = !!window.ReactNativeWebView;

export const isUosUserAtom = atom(isFromUoslifeWebView);
isUosUserAtom.debugLabel = 'isUosUser';
