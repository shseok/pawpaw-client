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
/**
 * 개선해야할점
 *  어디서든 다 쓰일수있게 만들기
 * 위로 올리는 style도 하드코딩이 아닌 계산해서 하게하기 완료.
 *
 * 햔제 로직
 * 1. 위아래 설정해줘야할 DOM의 부모 DOM 의 height를 저장한다.
 * 2. 위아래 설정해야할 DOM 이 만약 viewport의 크기를 넘어선다면
 */
