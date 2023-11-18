'use client';

import { useState, useEffect, ChangeEvent } from 'react';
import { cn } from '@/utils/common';
import { usePathname, useRouter } from 'next/navigation';
import { SearchInput } from '@/components/ui/ui';
import useInput from '@/hooks/common/useInput';

export default function SearchBar() {
  const initPlace = usePathname().split('/')[2] ?? '';
  const [place, onChangePlace, resetInput, setPlace] = useInput(initPlace);
  const router = useRouter();
  const searchPlace = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    router.push(`/pawzone/${place}`);
  };
  const onReset = () => {
    resetInput();
    // intercept routing에서만 적용
    if (initPlace) {
      router.back();
    }
  };

  // intercept routing에서 검색어초기화 후 뒤로 갔을 때, 검색어 초기화를 위함
  useEffect(() => {
    console.log('searchBar', initPlace);
    setPlace(initPlace);
  }, [initPlace]);

  return (
    <form onSubmit={searchPlace} className="z-[2] absolute top-0 left-0">
      <div className="w-[400px] absolute top-[30px] left-[30px] z-10">
        <SearchInput
          value={place}
          onChangeValue={onChangePlace}
          resetValue={onReset}
          placeholder="반려동물을 위한 장소를 찾아보세요!"
          onClickSearchIcon={searchPlace}
          className={cn('focus-primary', !!place ? null : 'shadow-searchBar')}
        />
      </div>
    </form>
  );
}
