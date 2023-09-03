import SearchIcon from '@/public/search.svg';
import InputDeleteIcon from '@/public/input-delete.svg';
import { ChangeEvent } from 'react';

interface SearchInputType {
  value: string;
  resetValue: () => void;
  onChangeValue: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchInput({
  value,
  resetValue,
  onChangeValue,
}: SearchInputType) {
  return (
    <div className="relative w-full">
      <input
        type="text"
        value={value}
        onChange={onChangeValue}
        className="border border-grey-600 block rounded-[10px] px-5 py-4 pr-20 w-full"
        placeholder="추가할 인원의 아이디나 닉네임을 검색해보세요"
      />
      <div className="absolute inset-y-0 top-0 flex gap-2 right-4">
        {value && (
          <button type="button" onClick={resetValue}>
            <InputDeleteIcon className="w-5 h-5 " />
          </button>
        )}
        <button type="button" className="">
          <SearchIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
