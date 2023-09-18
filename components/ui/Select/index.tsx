'use client';

/* eslint-disable import/no-cycle */
import React, {
  createContext,
  useState,
  useContext,
  useMemo,
  useRef,
  useCallback,
} from 'react';

import useOutSideClick from '@/hooks/common/useOutSideClick';
import Trigger from './Trigger';
import Option from './Option';
import OptionList from './OptionList';
import Value from './Value';

interface SelectContextType {
  isOpen: boolean;
  onOpenChange: () => void;
  onChange: (selected: string) => void;
  close: () => void;
}

const SelectContext = createContext<SelectContextType>({
  isOpen: false,
  onOpenChange: () => {},
  onChange: () => {},
  close: () => {},
});
export const useSelectContext = () => {
  const context = useContext(SelectContext);
  if (!SelectContext) {
    throw new Error(
      'Select 하위컴포넌트를 사용하려면 부모 컴포넌트로 <Select>가 있어야 합니다.',
    );
  }
  return context;
};
export default function CustomSelect({
  children,
  onChange,
}: {
  children: React.ReactNode;
  onChange: (selected: string) => void;
}) {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useOutSideClick(ref, () => setIsOpen(false));

  const onOpenChange = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const providerValue = useMemo(
    () => ({
      isOpen,
      onOpenChange,
      onChange,
      close: () => setIsOpen(false),
    }),
    [isOpen, onChange, onOpenChange],
  );
  return (
    <SelectContext.Provider value={providerValue}>
      <div className="relative w-full" ref={ref}>
        {children}
      </div>
    </SelectContext.Provider>
  );
}
export const Select = Object.assign(CustomSelect, {
  Trigger,
  Value,
  OptionList,
  Option,
});
