import { atom } from 'jotai';

export const isLoggedInAtom = atom(false);
isLoggedInAtom.debugLabel = 'isLoggedIn';

//@ts-expect-error: window has ReactNativeWebview
const isFromUoslifeWebView = !!window.ReactNativeWebView;

export const isUosUserAtom = atom(isFromUoslifeWebView);
isUosUserAtom.debugLabel = 'isUosUser';
