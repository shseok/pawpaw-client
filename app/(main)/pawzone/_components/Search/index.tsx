'use client';

import React, { useState } from 'react';
import SearchBar from './SearchBar';
import useInput from '@/hooks/common/useInput';
import SearchResult from './SearchResult';

export default function SearchArea() {
  const [text, onChangeText, reset] = useInput('');
  const [result, setResult] = useState('');

  // 검색시 검색결과를 받아와서 result에 저장
  const handleSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    // TODO: activate search area > show search result
    setResult(text);
  };
  // x 버튼 눌렀을 때, 검색 초기화
  const handleReset = () => {
    setResult('');
    reset();
  };

  return (
    <>
      <SearchBar
        text={text}
        onChangeText={onChangeText}
        reset={handleReset}
        onSubmit={handleSubmit}
        isOpenTab={!!result}
      />
      {result && <SearchResult />}
    </>
  );
}
