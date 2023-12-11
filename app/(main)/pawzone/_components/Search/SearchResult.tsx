'use client';

import { useEffect, useState } from 'react';
import { searchPlace } from '@/service/pawzone';
import { shallow } from 'zustand/shallow';
import LoadingIcon from '@/public/svgs/loading.svg';
import { useLocationStore } from '@/hooks/stores/useLocationStore';
import { usePlaceModalStore } from '@/hooks/stores/usePlaceModalStore';
import Toast from '@/utils/notification';
import { CATEGORY_MAP } from '@/constant/place';
import ModalButton from '../ModalButton';
import CardList from './CardList';

interface Props {
  place: string;
}

export default function SearchResult({ place }: Props) {
  const { center, bounds, places, setPlaces } = useLocationStore(
    (state) => ({
      center: state.center,
      bounds: state.bounds,
      places: state.places,
      setPlaces: state.setPlaces,
    }),
    shallow,
  );
  const { isOpen, setIsOpen } = usePlaceModalStore(
    (state) => ({ isOpen: state.isOpen, setIsOpen: state.setIsOpen }),
    shallow,
  );
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      if (!bounds.sw.lat || !bounds.sw.lng || !bounds.ne.lat || !bounds.ne.lng)
        return;
      try {
        const query = CATEGORY_MAP[place] ? undefined : place;
        const placeType = CATEGORY_MAP[place] || undefined;
        const res = await searchPlace({
          query,
          placeType,
          latMin: bounds.sw.lat,
          latMax: bounds.ne.lat,
          longMin: bounds.sw.lng,
          longMax: bounds.ne.lng,
        });
        setPlaces(res);
        setIsLoading(true);
      } catch (e) {
        if (e instanceof Error) {
          Toast.error(e.message);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();

    return () => {
      setPlaces([]);
    };
  }, [center, bounds, setPlaces]);

  // console.log(center, bounds);
  return (
    <>
      {isOpen && (
        <div className="w-[460px] h-full bg-white shadow-searchTab absolute top-0 left-0 z-[1] pt-[120px]">
          {isLoading ? (
            <LoadingIcon className="w-5 h-5 animate-spin" />
          ) : (
            <div className="pb-4 h-full px-[30px] overflow-y-scroll">
              <p className="header4 text-grey-800 mb-4">
                검색결과{' '}
                <span className="text-primary-200">{`${places.length}건`}</span>
              </p>
              <CardList list={places} />
            </div>
          )}
        </div>
      )}
      <ModalButton isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
