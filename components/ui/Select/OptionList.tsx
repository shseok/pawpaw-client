// eslint-disable-next-line import/no-cycle
import { useSelect } from '.';

interface SelectOptionListProps {
  children: React.ReactNode;
}

export default function OptionList({ children }: SelectOptionListProps) {
  const { isOpen } = useSelect();
  if (!isOpen) return null;
  return (
    <ul className="absolute flex flex-col w-full animate-dropdown scrollbar-hide mt-2 h-fit max-h-60 rounded-[10px] z-50 overflow-auto  bg-white border">
      {children}
    </ul>
  );
}
