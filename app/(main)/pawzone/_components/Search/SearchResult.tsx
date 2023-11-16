import React from 'react';
import CardList from './CardList';

export default function SearchResult() {
  const count = 0;
  return (
    <div className="w-[460px] h-full bg-white shadow-searchBar">
      <div className="pt-[120px] h-full px-[30px] pb-[30px]">
        <p className="header4 text-grey-800 mb-4">
          검색결과 <span className="text-primary-200">{`${count}건`}</span>
        </p>
        <CardList />
      </div>
    </div>
  );
}
