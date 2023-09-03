import { useState, ChangeEvent } from 'react';

export const useCheckbox = () => {
  const [checkedList, setCheckedList] = useState<string[]>([]);

  const handleCheckboxChange = (
    value: string,
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const { checked } = event.target;
    if (checked) {
      setCheckedList((prev) => [...prev, value]);
    }
    if (!checked && checkedList.includes(value)) {
      setCheckedList(checkedList.filter((item) => item !== value));
    }
  };

  return { checkedList, handleCheckboxChange };
};
