'use client';

import { cn } from '@/utils/common';
import { useRouter } from 'next/navigation';
import { SearchInput } from '@/components/ui/ui';
import useInput from '@/hooks/common/useInput';

export default function SearchBar({ initPlace = '' }: { initPlace?: string }) {
  const [place, onChangePlace, resetInput] = useInput(initPlace);
  const router = useRouter();
  const searchPlace = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    router.push(`/pawzone/search/${place}`);
  };
  const onReset = () => {
    resetInput();
    // dynamic routing일 경우만 뒤로 갔을 때, pawzone으로 이동
    if (initPlace) {
      router.push('/pawzone');
    }
  };

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
