'use client';

import useInput from '@/hooks/common/useInput';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { SearchInput } from '@/components/ui/ui';
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
    params.set('page', '1');
    if (text) {
      params.set('query', text);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <>
      <SearchInput
        onClickSearchIcon={handleSearch}
        value={text}
        resetValue={reset}
        placeholder="채팅방, 게시물 또는 유저를 검색할 수 있어요.🐾"
        onChangeValue={onChangeText}
        onPressEnter={() => {
          handleSearch();
          addSearchHistory(text);
        }}
      />
      <SearchHistory
        history={history}
        clearSearchHistory={clearSearchHistory}
        removeSearchTerm={removeSearchHistory}
      />
    </>
  );
}
