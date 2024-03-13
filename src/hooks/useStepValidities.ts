import { useAtomValue } from 'jotai';
import { CombinedValidities, combinedValidatiesAtoms } from '~/models';

export const useStepValidities = <Step extends keyof CombinedValidities>(
  step: Step,
) => {
  const entireValidity = useAtomValue(combinedValidatiesAtoms);

  const stepValidities = {} as CombinedValidities[Step];
  for (const page in entireValidity[step]) {
    stepValidities[page] = entireValidity[step][page];
  }

  return stepValidities;
};
