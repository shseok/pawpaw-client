'use client';

import Clock from '@/public/svgs/Pawzone/clock.svg';
import Star from '@/public/svgs/Pawzone/star.svg';
import EmptyStar from '@/public/svgs/Pawzone/empty_star.svg';
import Share from '@/public/svgs/ShareNetwork.svg';
import Chip from '../Chip';
import copyToClipBoard from '@/utils/copyToClipBoard';
import Divider from '@/components/ui/Divider';
import { useState } from 'react';
import ReviewContent from './ReviewContent';
import { Place } from '@/types/types';

interface Props {
  place: Place;
  time: string;
}

export default function PlaceContents({ place, time }: Props) {
  const [isBookmark, setIsBookmark] = useState(false);
  return (
    <div className="px-[30px] pb-[30px] bg-white rounded-t-lg-5 h-full flex flex-col flex-1 gap-4">
      <div className="flex gap-2">
        <Chip type="hot" />
        <Chip type="clean" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="header3 text-grey-800">{place.name}</p>
        <p className="body4 text-grey-800">{place.position.address}</p>
        <p className="flex items-center gap-1 body3 text-grey-800">
          <span>
            <Clock className="w-5 h-5" />
          </span>
          {time}
          <span className="body2">연중 무휴</span>
        </p>
        <p className="flex items-center gap-[3px] body2 text-grey-800">
          <Star className="w-[18px] h-[18px] fill-yellow-100" />
          {place.score ? Math.round(place.score * 10) / 10 : 0}
        </p>
      </div>
      <div className="flex border border-grey-200 rounded-[10px] py-2 items-center">
        <button
          type="button"
          className="flex-1 flex justify-center"
          onClick={() => {
            setIsBookmark(!isBookmark);
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
