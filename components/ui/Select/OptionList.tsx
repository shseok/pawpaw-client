import { useSelectContext } from '.';

interface SelectOptionListProps {
  children: React.ReactNode;
}

export default function OptionList({ children }: SelectOptionListProps) {
  const { isOpen } = useSelectContext();
  if (!isOpen) return null;
  return (
    <ul className="absolute w-full flex flex-col animate-dropdown mt-2 max-h-60 rounded-[10px] z-50 overflow-auto bg-white shadow-dropdown">
      {children}
    </ul>
  );
}
