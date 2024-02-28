import { atom } from 'jotai';

const pageFinishAtom = atom(true);
pageFinishAtom.debugLabel = 'pageFinishAtom';

const navigateNextStepAtom = atom(false);
navigateNextStepAtom.debugLabel = 'navigateNextStepAtom';

export { pageFinishAtom, navigateNextStepAtom };
