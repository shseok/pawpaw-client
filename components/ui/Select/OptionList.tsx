import { useRef, useState, useLayoutEffect } from 'react';
import { useSelectContext } from '.';

interface SelectOptionListProps {
  children: React.ReactNode;
}

export default function OptionList({ children }: SelectOptionListProps) {
  const ref = useRef<HTMLUListElement>(null);
  const [isOverFloating, setIsOverFloating] = useState(false);
  const { isOpen } = useSelectContext();

  const parentHeight =
    (ref.current?.parentElement?.offsetHeight as number) + 10;

  useLayoutEffect(() => {
    const currentRectBottom = ref.current?.getBoundingClientRect()
      .bottom as number;
    const { innerHeight } = window;
    setIsOverFloating(currentRectBottom + 10 > innerHeight);
  }, [isOpen]);
  if (!isOpen) return null;
  return (
    <ul
      className="absolute w-full flex flex-col animate-dropdown mt-2 max-h-60 rounded-[10px] z-50 overflow-auto bg-white shadow-dropdown"
      style={isOverFloating ? { bottom: parentHeight } : {}}
      ref={ref}
    >
      {children}
    </ul>
  );
}
