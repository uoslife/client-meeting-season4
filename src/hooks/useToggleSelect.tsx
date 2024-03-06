import { useState } from 'react';

export function useToggleSelect<T>(maxSelection?: number, selectedArray?: T[]) {
  const [selectedValues, setSelectedValues] = useState<T[]>(
    selectedArray === undefined ? [] : selectedArray,
  );

  const select = (value: T) => () => {
    if (selectedValues.includes(value)) {
      return setSelectedValues(selectedValues.filter(v => v !== value));
    }

    if (maxSelection === undefined || selectedValues.length < maxSelection) {
      setSelectedValues([...selectedValues, value]);
    }
  };

  const checkSelectedValues = (value: T) => {
    return selectedValues.includes(value);
  };

  return { selectedValues, select, checkSelectedValues };
}
