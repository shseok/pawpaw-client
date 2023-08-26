/* eslint-disable import/no-cycle */
import { ReactNode } from 'react';
import { useDropdown } from './Dropdown';

export default function DropdownTrigger({ children }: { children: ReactNode }) {
  const { handleDropdown } = useDropdown();
  return (
    <button type="button" onClick={handleDropdown}>
      {children}
    </button>
  );
}
