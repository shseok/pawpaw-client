import ComboboxArrowIcon from '@/public/combobox-arrow.svg';
// eslint-disable-next-line import/no-cycle
import { useSelectContext } from '.';

interface SelectValueProps {
  defaultValue: string | number;
}

export default function Value({ defaultValue }: SelectValueProps) {
  const { isOpen } = useSelectContext();
  return (
    <div className="flex gap-2 items-center justify-center border rounded-[10px] p-2">
      <div className="flex-1">{defaultValue}</div>
      <ComboboxArrowIcon
        className={`${isOpen ? 'duration-300 -rotate-180' : ''}`}
      />
    </div>
  );
}
