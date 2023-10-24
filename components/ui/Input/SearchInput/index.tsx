import { ChangeEvent } from 'react';
import SearchIcon from '@/public/svgs/search.svg';
import InputDeleteIcon from '@/public/svgs/input-delete.svg';

interface SearchInputType {
  value: string;
  resetValue: () => void;
  onChangeValue: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className?: string;
  onClickSearchIcon?: () => void;
  onPressEnter?: () => void;
}

export default function SearchInput({
  value,
  resetValue,
  onChangeValue,
  placeholder,
  className,
  onClickSearchIcon,
  onPressEnter,
}: SearchInputType) {
  return (
    <div className="relative w-full">
      <input
        type="text"
        value={value}
        onChange={onChangeValue}
        className={`text-xs 2xs:text-sm sm:body1 border border-grey-600 block rounded-[10px] pl-5 pr-[60px] py-4 w-full ${className}`}
        placeholder={placeholder}
        onKeyUp={(event) => {
          if (event.key === 'Enter') {
            onPressEnter?.();
          }
        }}
      />
      <div className="absolute inset-y-0 top-0 flex gap-2 right-4">
        {value && (
          <button type="button" onClick={resetValue}>
            <InputDeleteIcon className="w-5 h-5 " />
          </button>
        )}
        <button type="button" className="" onClick={onClickSearchIcon}>
          <SearchIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
