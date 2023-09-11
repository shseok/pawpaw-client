import ComboboxArrowIcon from '@/public/combobox-arrow.svg';
// eslint-disable-next-line import/no-cycle
import { useSelectContext } from '.';

interface SelectValueProps {
  defaultValue: string | number;
}

export default function Value({ defaultValue }: SelectValueProps) {
  const { isOpen } = useSelectContext();
  const focus = isOpen ? 'ring-1 ring-primary-200 duration-200' : '';
  const animation = isOpen
    ? 'duration-300 -rotate-180 fill-black'
    : 'fill-gray-300';
  return (
    <div
      className={`flex items-center justify-center border rounded-[10px] w-full p-4 ${focus}`}
    >
      <div className="flex-1">{defaultValue}</div>
      <ComboboxArrowIcon className={animation} />
    </div>
  );
}
