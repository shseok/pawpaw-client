'use client';

import { cn } from '@/utils/common';
import { useRouter } from 'next/navigation';
import { SearchInput } from '@/components/ui/ui';
import useInput from '@/hooks/common/useInput';
import { usePlaceModalStore } from '@/hooks/stores/usePlaceModalStore';
import { shallow } from 'zustand/shallow';
import Toast from '@/utils/notification';

export default function SearchBar({ initPlace = '' }: { initPlace?: string }) {
  const { isOpen } = usePlaceModalStore(
    (state) => ({ isOpen: state.isOpen, setIsOpen: state.setIsOpen }),
    shallow,
  );
  const [place, onChangePlace, resetInput] = useInput(initPlace);
  const router = useRouter();
  const searchPlace = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    if (place.length < 2) {
      Toast.error('2글자 이상 입력해주세요.');
      return;
    }
    // 2글자부터 검색 가능
    router.push(`/pawzone/search/${place}`);
  };
  const onReset = () => {
    resetInput();
    // dynamic routing일 경우만 뒤로 갔을 때, pawzone으로 이동
    if (initPlace) {
      router.push('/pawzone');
    }
  };

  if (!isOpen) return null;

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
