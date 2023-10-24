import { ReactNode } from 'react';
import { useRadioContext } from '.';

interface RadioItemProps {
  children: ReactNode;
  option: string;
}

export default function Item({ option, children }: RadioItemProps) {
  const { value, onChange } = useRadioContext();
  return (
    <label className="flex items-center gap-2 w-fit header4" htmlFor={option}>
      <input
        id={option}
        type="radio"
        checked={value === option}
        value={option}
        onChange={(event) => onChange(event.target.value)}
        className="w-5 h-5 checked:bg-primary-200 text-primary-200 focus:ring-primary-200"
      />
      {children}
    </label>
  );
}
