import React from 'react';
import CardList from '../Search/CardList';

export default function PlaceScreen() {
  return (
    <div className="w-[460px] h-full bg-white shadow-searchTab absolute top-0 left-0 z-[1]">
      <div className="pb-4 h-full px-[30px] overflow-y-scroll">
        <p className="header4 text-grey-800 mb-4">
          {/* 검색결과 <span className="text-primary-200">{`${count}건`}</span> */}
        </p>
        <CardList />
      </div>
    </div>
  );
}
