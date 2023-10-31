'use client';

import useInput from '@/hooks/common/useInput';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import SearchIcon from '@/public/svgs/search.svg';
import InputDeleteIcon from '@/public/svgs/input-delete.svg';
import { useState, useEffect } from 'react';
import SearchHistory from './SearchHistory';

export default function SearchQueryInput() {
  const [history, setHistory] = useState<string[]>(
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('history') ?? '[]')
      : [],
  );
  const [text, onChangeText, reset] = useInput('');
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // 검색기록 상태에 변화가 있다면 해당 변화를 로컬스토리지도 최신화 시켜준다.
  useEffect(() => {
    localStorage.setItem('history', JSON.stringify(history));
  }, [history]);

  //* *로컬스토리지에 없는 단어라면 로컬스토리지에 검색한 단어 추가 */
  const addSearchHistory = (searchTerm: string) => {
    // 이미 검색했던거라면 검색기록 추가x
    if (history.includes(searchTerm)) return;
    setHistory([...history, searchTerm]);
  };
  const removeSearchHistory = (searchTerm: string) => {
    const removedSearchHistory = history.filter((item) => item !== searchTerm);
    setHistory(removedSearchHistory);
  };
  const clearSearchHistory = () => {
    setHistory([]);
  };
  const handleSearch = () => {
    const params = new URLSearchParams(searchParams);
    if (text) {
      params.set('query', text);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <>
      <div className="relative w-full">
        <input
          type="text"
          value={text}
          onChange={onChangeText}
          className="rounded-[10px] w-full focus:ring-0 py-3 pr-20"
          onKeyUp={(event) => {
            if (event.key === 'Enter') {
              handleSearch();
              addSearchHistory(text);
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
      <SearchHistory
        history={history}
        removeSearchTerm={removeSearchHistory}
        clearSearchHistory={clearSearchHistory}
      />
    </>
  );
}
