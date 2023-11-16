'use client';

import { SearchInput } from '@/components/ui/ui';
import React, { ChangeEvent } from 'react';

interface Props {
  text: string;
  onChangeText: (e: ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
  onSubmit: () => void;
}

export default function SearchBar({
  text,
  onChangeText,
  reset,
  onSubmit,
}: Props) {
  return (
    <div className="w-[400px] absolute top-[30px] left-[30px] z-10">
      <SearchInput
        value={text}
        onChangeValue={onChangeText}
        resetValue={reset}
        placeholder="반려동물을 위한 장소를 찾아보세요!"
        onClickSearchIcon={onSubmit}
        // className=" sm:h-20 z-4"
      />
    </div>
  );
}
