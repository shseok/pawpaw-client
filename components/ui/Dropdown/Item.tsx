// eslint-disable-next-line import/no-cycle
import { useDropdown } from './Dropdown';

interface DropdownItemType {
  children: React.ReactNode | string;
  event?: () => void;
}

export default function Item({ children, event }: DropdownItemType) {
  const { closeDropdown } = useDropdown();
  const eventHandler = () => {
    if (event) {
      event();
    }
    closeDropdown();
  };
  return (
    <li className="w-full rounded-[10px] hover:bg-primary-50 active:bg-primary-100">
      <button
        className="w-full p-3 text-left body1"
        type="button"
        onClick={eventHandler}
      >
        {children}
      </button>
    </li>
  );
}
