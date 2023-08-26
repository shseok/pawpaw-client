'use client';

/* eslint-disable import/no-cycle */
import { createContext, useState, useContext, useMemo } from 'react';
import DropdownItem from './DropdownItem';
import DropdownMenu from './DropdownMenu';
import DropdownTrigger from './DropdownTrigger';

interface DropDownProps {
  children: React.ReactNode;
}
interface DropdownContextType {
  isOpen: boolean;
  handleDropdown: () => void;
}

const DropdownContext = createContext<DropdownContextType>({
  isOpen: false,
  handleDropdown: () => {},
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

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const providerValue = useMemo(() => ({ isOpen, handleDropdown }), [isOpen]);
  return (
    <DropdownContext.Provider value={providerValue}>
      <div className="relative">{children}</div>
    </DropdownContext.Provider>
  );
}
Dropdown.Trigger = DropdownTrigger;
Dropdown.Menu = DropdownMenu;
Dropdown.Item = DropdownItem;
