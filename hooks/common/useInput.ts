import { ChangeEvent, useState } from 'react';

const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const onChangeValue = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValue(e.target.value);
  };
  const resetValue = () => {
    setValue('');
  };
  return { value, resetValue, onChangeValue };
};
export default useInput;
