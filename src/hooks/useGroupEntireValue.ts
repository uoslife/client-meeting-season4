import { atom, useAtomValue } from 'jotai';
import { useMemo } from 'react';
import { GroupApplyInfo, groupApplyAtoms } from '~/store/meeting';

const useGroupEntireValue = () => {
  return useAtomValue(
    useMemo(
      () => ({
        ...atom(get => {
          const groupInfo = {} as GroupApplyInfo;
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
