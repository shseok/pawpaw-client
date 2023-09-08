'use client';

/* eslint-disable import/no-cycle */
import React, {
  createContext,
  useState,
  useContext,
  useMemo,
  Dispatch,
  SetStateAction,
} from 'react';
import Trigger from './Trigger';
import Option from './Option';
import OptionList from './OptionList';
import Label from './Label';

interface SelectContextType {
  isOpen: boolean;
  onOpenChange: () => void;
  setValue: Dispatch<SetStateAction<string>>;
  value: string;
  close: () => void;
}

const SelectContext = createContext<SelectContextType>({
  isOpen: false,
  onOpenChange: () => {},
  setValue: () => {},
  value: '',
  close: () => {},
});
export const useSelect = () => {
  const selectContext = useContext(SelectContext);
  if (!SelectContext) {
    throw new Error(
      'Select 하위컴포넌트를 사용하려면 부모 컴포넌트로 <Select>가 있어야 합니다.',
    );
  }
  return selectContext;
};

export default function CustomSelect({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState('');
  const onOpenChange = () => {
    setIsOpen(!isOpen);
  };

  const providerValue = useMemo(
    () => ({
      isOpen,
      onOpenChange,
      setValue,
      value,
      close: () => setIsOpen(false),
    }),
    [isOpen, value],
  );

  return (
    <SelectContext.Provider value={providerValue}>
      <div className={`relative ${className || ''}`}>{children}</div>
    </SelectContext.Provider>
  );
}
export const Select = Object.assign(CustomSelect, {
  Trigger,
  Label,
  OptionList,
  Option,
});
