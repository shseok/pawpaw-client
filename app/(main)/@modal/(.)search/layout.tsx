import React from 'react';
import ContentTab from './_components/ContentTab';
import SearchQueryInput from './_components/SearchQueryInput';
import SearchModal from './_components/SearchModal';

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SearchModal>
      <header>
        <SearchQueryInput />
      </header>
      <ContentTab />
      {children}
    </SearchModal>
  );
}
