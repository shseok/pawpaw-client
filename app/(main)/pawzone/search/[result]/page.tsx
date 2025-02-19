import React from 'react';
import SearchBar from '../../_components/Search/SearchBar';
import SearchResult from '../../_components/Search/SearchResult';

interface Props {
  params: { result: string };
}

export default function PlacePage({ params: { result } }: Props) {
  const keyword = decodeURI(result);
  return (
    <>
      <SearchBar initPlace={keyword} />
      <SearchResult place={keyword} />
    </>
  );
}
