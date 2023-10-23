import { ChangeEvent, useState } from 'react';

const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const onChangeValue = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValue(e.target.value);
  };
  const setValueByInput = (text: string) => {
    setValue(text);
  };
  const resetValue = () => {
    setValue('');
  };
  return [value, onChangeValue, resetValue, setValueByInput] as const;
};
export default useInput;
