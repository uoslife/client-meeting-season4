import { atom } from 'jotai';
import uoslifeBridge from '~/bridge';

export const isLoggedInAtom = atom(false);
isLoggedInAtom.debugLabel = 'isLoggedIn';

const isUoslifeBridgeInstalled = uoslifeBridge.driver.isInstalled;
export const isUosUserAtom = atom(isUoslifeBridgeInstalled);
isUosUserAtom.debugLabel = 'isUosUser';
