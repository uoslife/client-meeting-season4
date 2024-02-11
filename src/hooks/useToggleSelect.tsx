import { useState } from 'react';

export function useToggleSelect<T>(maxSelection: number) {
  const [selectedValues, setSelectedValues] = useState<T[]>([]);

  const select = (value: T) => () => {
    if (selectedValues.includes(value)) {
      return setSelectedValues(selectedValues.filter(v => v !== value));
    }
    /* 최대 선택 개수를 제한하는 함수 추가 */
    if (selectedValues.length < maxSelection) {
      setSelectedValues([...selectedValues, value]);
    }
  };

  const checkSelectedValues = (value: T) => {
    return selectedValues.includes(value);
  };

  return { selectedValues, select, checkSelectedValues };
}
