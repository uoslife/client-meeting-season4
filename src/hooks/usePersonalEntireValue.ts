import { atom, useAtomValue } from 'jotai';
import { useMemo } from 'react';
import { PersonalState, personalApplyAtoms } from '~/store/meeting';

const usePersonalEntireValue = () => {
  return useAtomValue(
    useMemo(
      () => ({
        ...atom(get => {
          const personalInfo = {} as PersonalState;
          Object.entries(personalApplyAtoms).map(([key, value]) => {
            Object.assign(personalInfo, {
              [key]: get<unknown>(value),
            });
          });

          return personalInfo;
        }),
        debugLabel: 'personalEntireInfo',
      }),
      [],
    ),
  );
};

export default usePersonalEntireValue;
