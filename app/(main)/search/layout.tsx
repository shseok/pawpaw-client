import React from 'react';
import SearchQueryInput from '../@modal/(.)search/_components/SearchQueryInput';
import ContentTab from '../@modal/(.)search/_components/ContentTab';

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="">
      <SearchQueryInput />
      <ContentTab />
      {children}
    </main>
  );
}
