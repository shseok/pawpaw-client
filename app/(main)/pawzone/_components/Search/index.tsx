'use client';

import React, { useState } from 'react';
import SearchBar from './SearchBar';
import useInput from '@/hooks/common/useInput';
import SearchResult from './SearchResult';

export default function SearchArea() {
  const [text, onChangeText, reset] = useInput('');
  const [result, setResult] = useState('');
  const handleSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    // TODO: activate search area > show search result
    setResult(text);
  };
  const handleReset = () => {
    setResult('');
    reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <SearchBar
        text={text}
        onChangeText={onChangeText}
        reset={handleReset}
        onSubmit={handleSubmit}
      />
      {result && <SearchResult />}
    </form>
  );
}
