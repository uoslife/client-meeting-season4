import { useState, ChangeEvent } from 'react';

export const useInput = (initialValue: string) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const setValueClear = () => {
    setInputValue('');
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return {
    inputValue,
    setValueClear,
    handleInputChange,
  };
};
