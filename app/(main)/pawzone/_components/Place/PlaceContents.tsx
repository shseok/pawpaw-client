'use client';

import Clock from '@/public/svgs/Pawzone/clock.svg';
import Star from '@/public/svgs/Pawzone/star.svg';
import EmptyStar from '@/public/svgs/Pawzone/empty_star.svg';
import Share from '@/public/svgs/ShareNetwork.svg';
import Arrow from '@/public/svgs/Auth/arrow-drop-down.svg';
import Chip from '../Chip';
import copyToClipBoard from '@/utils/copyToClipBoard';
import Divider from '@/components/ui/Divider';
import { useEffect, useState } from 'react';
import ReviewContent from './ReviewContent';
import { Place } from '@/types/types';
import { shallow } from 'zustand/shallow';
import { useLocationStore } from '@/hooks/stores/useLocationStore';
import { createPlaceBookmark, deletePlaceBookmark } from '@/service/pawzone';
import Toast from '@/utils/notification';
import { getKoreanPlaceTimeArray } from '@/utils/getPlaceTimeText';
import { cn } from '@/utils/common';

export default function PlaceContents({ place }: { place: Place }) {
  const [isBookmark, setIsBookmark] = useState(place.bookmarked);
  const [isTimeOpen, setIsTimeOpen] = useState(false);
  const { mapRef, setPlaces, setCenter } = useLocationStore(
    (state) => ({
      mapRef: state.mapRef,
      setCenter: state.setCenter,
      setPlaces: state.setPlaces,
    }),
    shallow,
  );

  const handleButtonClick = () => {
    setIsTimeOpen(!isTimeOpen);
  };

  const timeArray = getKoreanPlaceTimeArray({
    mon: {
      open: place.monOpen,
      close: place.monClose,
      lastOrder: place.monLastOrder,
    },
    tue: {
      open: place.tueOpen,
      close: place.tueClose,
      lastOrder: place.tueLastOrder,
    },
    wed: {
      open: place.wedOpen,
      close: place.wedClose,
      lastOrder: place.wedLastOrder,
    },
    thu: {
      open: place.thuOpen,
      close: place.thuClose,
      lastOrder: place.thuLastOrder,
    },
    fri: {
      open: place.friOpen,
      close: place.friClose,
      lastOrder: place.friLastOrder,
    },
    sat: {
      open: place.satOpen,
      close: place.satClose,
      lastOrder: place.satLastOrder,
    },
    sun: {
      open: place.sunOpen,
      close: place.sunClose,
      lastOrder: place.sunLastOrder,
    },
  });

   useEffect(() => {
     if (!mapRef.current) return;
     mapRef.current.addListener('tilesloaded', () => {
       console.log('tilesloaded');
       setCenter({
         lat: place.position.latitude,
         lng: place.position.longitude,
       });
     });

     setPlaces([place]);
   }, [mapRef.current]);

  return (
    <div className="px-[30px] pb-[30px] bg-white rounded-t-lg-5 h-full flex flex-col flex-1 gap-4">
      <div className="flex gap-2">
        <Chip type="hot" />
        <Chip type="clean" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="header3 text-grey-800">{place.name}</p>
        <p className="body4 text-grey-800">{place.position.address}</p>
        <div className="flex items-start gap-1">
          <Clock className="w-5 h-5" />
          <ul className="transition-transform duration-400">
            {timeArray.map((d, idx) => (
              <li key={idx}>
                {idx === 0 ? (
                  <button
                    className="flex items-center gap-2"
                    onClick={handleButtonClick}
                  >
                    <span className="body3 text-grey-800">{d}</span>
                    <Arrow
                      className={cn(
                        'fill-grey-300',
                        isTimeOpen ? 'rotate-180' : null,
                      )}
                    />
                  </button>
                ) : (
                  <span
                    className={cn(
                      'body3 text-grey-800 hidden',
                      isTimeOpen ? 'inline' : null,
                    )}
                  >
                    {d}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <p className="flex items-center gap-[3px] body2 text-grey-800">
          <Star className="w-[18px] h-[18px] fill-yellow-100" />
          {place.score ? Math.round(place.score * 10) / 10 : '리뷰 없음'}
        </p>
      </div>
      <div className="flex border border-grey-200 rounded-[10px] py-2 items-center">
        <button
          type="button"
          className="flex-1 flex justify-center"
          onClick={async () => {
            try {
              isBookmark
                ? await deletePlaceBookmark({ placeId: place.id })
                : await createPlaceBookmark({ placeId: place.id });
              setIsBookmark(!isBookmark);
            } catch (e) {
              if (e instanceof Error) {
                Toast.error(e.message);
              }
            }
          }}
        >
          {isBookmark ? (
            <Star className="w-6 h-6 fill-yellow-100" />
          ) : (
            <EmptyStar className="w-6 h-6 " />
          )}
        </button>
        <Divider type="vertical" />
        <button
          type="button"
          className="flex-1 flex justify-center"
          onClick={() =>
            copyToClipBoard(`https://www.paw-paw.xyz/place/탑골공원`)
          }
        >
          <Share className="w-6 h-6" />
        </button>
      </div>
      <Divider type="horizontal" className="my-3" />
      <ReviewContent place={place} />
    </div>
  );
}
