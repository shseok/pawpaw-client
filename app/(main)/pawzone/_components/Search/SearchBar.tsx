'use client';

import { SearchInput } from '@/components/ui/ui';
import { cn } from '@/utils/common';
import React, { ChangeEvent } from 'react';

interface Props {
  text: string;
  isOpenTab: boolean;
  onChangeText: (e: ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
  onSubmit: () => void;
}

export default function SearchBar({
  text,
  onChangeText,
  reset,
  onSubmit,
  isOpenTab,
}: Props) {
  return (
    <form onSubmit={onSubmit} className="z-[2] absolute top-0 left-0">
      <div className="w-[400px] absolute top-[30px] left-[30px] z-10">
        <SearchInput
          value={text}
          onChangeValue={onChangeText}
          resetValue={reset}
          placeholder="반려동물을 위한 장소를 찾아보세요!"
          onClickSearchIcon={onSubmit}
          className={cn('focus-primary', isOpenTab ? null : 'shadow-searchBar')}
        />
      </div>
    </form>
  );
}
