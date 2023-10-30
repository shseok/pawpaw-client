'use client';

import useInput from '@/hooks/common/useInput';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import SearchIcon from '@/public/svgs/search.svg';
import InputDeleteIcon from '@/public/svgs/input-delete.svg';

export default function SearchQueryInput() {
  const [text, onChangeText, reset] = useInput('');
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleSearch = () => {
    const params = new URLSearchParams(searchParams);
    if (text) {
      params.set('query', text);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={text}
        onChange={onChangeText}
        className="rounded-[10px] w-full focus:ring-0 py-3 pr-20"
        onKeyUp={(event) => {
          if (event.key === 'Enter') {
            handleSearch();
          }
        }}
      />
      <div className="absolute inset-y-0 flex gap-2 right-4">
        {text && (
          <button type="button" onClick={reset}>
            <InputDeleteIcon className="w-6 h-6" />
          </button>
        )}
        <button type="button">
          <SearchIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
