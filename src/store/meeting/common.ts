import { atom } from 'jotai';

const meetingTypeAtom = atom<'group' | 'personal' | null>(null);

export { meetingTypeAtom };
