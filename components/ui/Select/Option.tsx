import { useSelectContext } from '.';

interface SelectOptionProps {
  children: React.ReactNode;
  value: string;
}

export default function Option({ children, value }: SelectOptionProps) {
  const { close, onChange } = useSelectContext();

  const handleOptionSelect = () => {
    onChange(value);
    close();
  };
  return (
    <li>
      <button
        type="button"
        onClick={handleOptionSelect}
        className="w-full p-2 hover:bg-primary-50 active:bg-primary-100"
      >
        {children}
      </button>
    </li>
  );
}
