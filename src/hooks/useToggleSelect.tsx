import { useState } from 'react';

export function useToggleSelect<T>() {
  const [selectedValues, setSelectedValues] = useState<T[]>([]);

  const select = (value: T) => () => {
    if (selectedValues.includes(value)) {
      return setSelectedValues(selectedValues.filter(v => v !== value));
    }
    setSelectedValues([...selectedValues, value]);
  };

  const checkSelectedValues = (value: T) => {
    return selectedValues.includes(value);
  };

  return { selectedValues, select, checkSelectedValues };
}
