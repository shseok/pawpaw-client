import React from 'react';
import SearchBar from '../_components/Search/SearchBar';
import SearchResult from '../_components/Search/SearchResult';

interface Props {
  params: { place: string };
}

export default function PlacePage({ params: { place } }: Props) {
  return (
    <>
      <SearchBar initPlace={place} />
      <SearchResult />;
    </>
  );
}
