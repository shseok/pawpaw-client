/* eslint-disable import/no-cycle */
import { useDropdown } from './Dropdown';

export default function Trigger({ children }: { children: React.ReactNode }) {
  const { handleDropdown } = useDropdown();
  return (
    <button type="button" onClick={handleDropdown}>
      {children}
    </button>
  );
}
