import { ChangeEvent, useState } from 'react';

export const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const resetValue = () => {
    setValue('');
  };
  return { value, resetValue, onChangeValue };
};
