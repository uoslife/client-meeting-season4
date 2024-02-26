import { atom, useAtomValue } from 'jotai';
import { useMemo } from 'react';
import { groupApplyAtoms } from '~/store/meeting';

const useGroupEntireValue = () => {
  return useAtomValue(
    useMemo(
      () => ({
        ...atom(get => {
          const groupInfo = {} as typeof groupApplyAtoms;
          Object.entries(groupApplyAtoms).map(([key, value]) => {
            Object.assign(groupInfo, {
              [key]: get<unknown>(value),
            });
          });

          return groupInfo;
        }),
        debugLabel: 'groupEntireInfo',
      }),
      [],
    ),
  );
};

export default useGroupEntireValue;
