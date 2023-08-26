// eslint-disable-next-line import/no-cycle
import { useDropdown } from './Dropdown';

interface Item {
  children: React.ReactNode | string;

  event?: () => void;
}

export default function DropdownItem({
  children,
  event = () => {
    console.error('해당 메뉴에 대한 이벤트가 존재하지 않습니다.');
  },
}: Item) {
  const { handleDropdown } = useDropdown();
  const eventHandler = () => {
    event();
    handleDropdown();
  };
  return (
    <li>
      <button
        className="w-full p-3 text-left rounded-[10px] body1 hover:bg-grey-100 active:bg-grey-200"
        type="button"
        onClick={eventHandler}
      >
        {children}
      </button>
    </li>
  );
}
