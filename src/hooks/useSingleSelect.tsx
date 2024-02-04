import { useState } from 'react';

export function useSingleSelection<T>() {
  const [selectedValue, setSelectedValue] = useState<T | null>(null);

  const select = (value: T) => () => {
    setSelectedValue(value);
  };

  const checkSelectedValue = (value: T) => {
    return selectedValue === value;
  };

  return { selectedValue, select, checkSelectedValue };
}
