import React from 'react';
import SearchResult from '../_components/SearchResult';
import SearchBar from '@/app/(main)/pawzone/_components/Search/SearchBar';

interface Props {
  params: { place: string };
}

export default function PawzoneModalPage({ params: { place } }: Props) {
  return (
    <main className="relative bg-white">
      <SearchBar />
      <SearchResult searchText={place} />
    </main>
  );
}
