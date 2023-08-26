/* eslint-disable import/no-cycle */
import { ReactNode } from 'react';
import { useDropdown } from './Dropdown';

interface Menu {
  children: ReactNode;
  direction?: 'left' | 'right';
}

export default function DropdownMenu({ children, direction = 'right' }: Menu) {
  const { isOpen, handleDropdown } = useDropdown();
  if (!isOpen) return null;
  const directionClass = direction === 'left' ? 'left-0' : 'right-0';
  return (
    <ul
      onBlur={handleDropdown}
      className={`absolute ${directionClass} flex flex-col w-48 gap-2 p-4 bg-white shadow-chatCard rounded-[10px]`}
    >
      {children}
    </ul>
  );
}
