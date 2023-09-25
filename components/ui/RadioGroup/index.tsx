'use client';

import { ReactNode, createContext, useContext, useMemo } from 'react';
import Item from './Item';

interface RadioGroupProps {
  children: ReactNode;
  value: string;
  onChange: (value: string) => void;
}
interface RadioContextType {
  value: string;
  onChange: (value: string) => void;
}
const RadioContext = createContext<RadioContextType>({
  value: '',
  onChange: () => {},
});
export const useRadioContext = () => {
  const radioContext = useContext(RadioContext);
  if (!radioContext) {
    throw new Error('radioContext는 RadioGroup 안에서 사용되어야합니다.');
  }
  return radioContext;
};
export default function CustomRadioGroup({
  children,
  value,
  onChange,
}: RadioGroupProps) {
  const providerValue = useMemo(() => ({ value, onChange }), [value, onChange]);
  return (
    <RadioContext.Provider value={providerValue}>
      {children}
    </RadioContext.Provider>
  );
}
export const RadioGroup = Object.assign(CustomRadioGroup, {
  Item,
});
