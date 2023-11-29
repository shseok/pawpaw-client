'use client';

import { useEffect, useState } from 'react';
import CardList from './CardList';
import { searchPlace } from '@/service/pawzone';
import { Place } from '@/types/types';
import { shallow } from 'zustand/shallow';
import { useLocationStore } from '@/hooks/stores/useLocationStore';

interface Props {
  place: string;
}

export default function SearchResult({ place }: Props) {
  const [data, setData] = useState<Place[]>([]);
  const { center, bounds } = useLocationStore(
    (state) => ({
      center: state.center,
      bounds: state.bounds,
    }),
    shallow,
  );
  useEffect(() => {
    const fetchData = async () => {
      if (!bounds.sw.lat || !bounds.sw.lng || !bounds.ne.lat || !bounds.ne.lng)
        return;
      const res = await searchPlace({
        query: place,
        // placeType: 'CAFE',
        latMin: bounds.sw.lat,
        latMax: bounds.ne.lat,
        longMin: bounds.sw.lng,
        longMax: bounds.ne.lng,
      });
      setData(res);
    };
    fetchData();
  }, [bounds]);

  // console.log(center, bounds);
  return (
    <div className="w-[460px] h-full bg-white shadow-searchTab absolute top-0 left-0 z-[1] pt-[120px]">
      <div className="pb-4 h-full px-[30px] overflow-y-scroll">
        <p className="header4 text-grey-800 mb-4">
          검색결과{' '}
          <span className="text-primary-200">{`${data.length}건`}</span>
        </p>
        <CardList list={data} />
      </div>
    </div>
  );
}
