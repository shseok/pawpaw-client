// eslint-disable-next-line import/no-cycle
import { useSelect } from '.';

interface SelectOptionProps {
  children: React.ReactNode;
  value: string;
}

export default function Option({ children, value }: SelectOptionProps) {
  const { close, setValue } = useSelect();

  const handleOptionSelect = () => {
    setValue(value);
    close();
  };
  return (
    <li>
      <button
        type="button"
        onClick={handleOptionSelect}
        className="w-full hover:bg-primary-50 active:bg-primary-100"
      >
        {children}
      </button>
    </li>
  );
}
