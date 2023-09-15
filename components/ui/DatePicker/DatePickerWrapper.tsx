'use client';

import { ReactNode, useRef, useEffect, useState } from 'react';

export default function DatePickerWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isOverFloating, setIsOverFloating] = useState(false);
  const parentHeight =
    (ref.current?.parentElement?.offsetHeight as number) + 10;

  useEffect(() => {
    const currentRectBottom = ref.current?.getBoundingClientRect()
      .bottom as number;
    const { innerHeight } = window;
    setIsOverFloating(currentRectBottom > innerHeight);
  }, []);

  return (
    <div
      className="absolute rounded-[10px] p-3 z-50 mt-2 w-72 bg-white shadow-chatCard caption2 animate-dropdown"
      ref={ref}
      style={isOverFloating ? { bottom: parentHeight } : {}}
    >
      {children}
    </div>
  );
}
