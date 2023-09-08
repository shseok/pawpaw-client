import { useRef } from 'react';
import useOutSideClick from '@/hooks/common/useOutSideClick';
// eslint-disable-next-line import/no-cycle
import { useSelect } from '.';

interface SelectOptionListProps {
  children: React.ReactNode;
}

export default function OptionList({ children }: SelectOptionListProps) {
  const ref = useRef<HTMLUListElement>(null);
  const { isOpen, close } = useSelect();
  useOutSideClick(ref, close);
  if (!isOpen) return null;
  return (
    <ul
      ref={ref}
      className="absolute flex flex-col w-full animate-dropdown scrollbar-hide mt-2 h-fit max-h-40 rounded-[10px] z-50 overflow-auto  bg-white border"
    >
      {children}
    </ul>
  );
}
