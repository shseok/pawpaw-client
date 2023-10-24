'use client';

/* eslint-disable import/no-cycle */
import React, {
  createContext,
  useState,
  useContext,
  useMemo,
  useEffect,
  useRef,
} from 'react';

import useOutSideClick from '@/hooks/common/useOutSideClick';
import Item from './Item';
import Menu from './Menu';
import Trigger from './Trigger';

interface DropDownProps {
  children: React.ReactNode;
}
interface DropdownContextType {
  isOpen: boolean;
  handleDropdown: () => void;
  closeDropdown: () => void;
}

const DropdownContext = createContext<DropdownContextType>({
  isOpen: false,
  handleDropdown: () => {},
  closeDropdown: () => {},
});

export const useDropdown = () => {
  const dropDownState = useContext(DropdownContext);
  if (!dropDownState) {
    throw new Error(
      'Dropdown의 하위컴포넌트를 사용하려면 Dropdown으로 감싸져야합니다. ',
    );
  }
  return dropDownState;
};

export default function Dropdown({ children }: DropDownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isOpenRef = useRef(isOpen);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useOutSideClick(dropdownRef, () => setIsOpen(false));
  useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);
  const handleEscKeyClose = (event: KeyboardEvent) => {
    if (isOpenRef.current && event.key === 'Escape') {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', handleEscKeyClose);
    return () => {
      document.removeEventListener('keydown', handleEscKeyClose);
    };
  }, []);

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const providerValue = useMemo(
    () => ({ isOpen, handleDropdown, closeDropdown: () => setIsOpen(false) }),
    [isOpen],
  );
  return (
    <DropdownContext.Provider value={providerValue}>
      <div className="relative" ref={dropdownRef}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

Dropdown.Trigger = Trigger;
Dropdown.Menu = Menu;
Dropdown.Item = Item;
