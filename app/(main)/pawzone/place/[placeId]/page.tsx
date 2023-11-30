import React from 'react';
import { getDetailedPlace } from '@/service/server/pawzone';
import Image from 'next/image';
import PlaceContents from '../../_components/Place';

interface Props {
  params: { placeId: string };
}

// id로 이에 대한 데이터를 활용하기
export default async function page({ params: { placeId } }: Props) {
  const place = await getDetailedPlace(placeId);
  const { imageUrlList, name } = place;
  return (
    <div className="w-[460px] h-full bg-white shadow-searchTab absolute top-0 left-0 z-[1]">
      <div className="pb-4 h-full overflow-y-scroll">
        <div className="flex flex-col overflow-x-hidden">
          <div className="relative w-[460px] h-[460px]">
            <Image
              src={imageUrlList[0]}
              alt={name}
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 h-[30px] w-full bg-white rounded-t-[20px]" />
          </div>
          <PlaceContents place={place} time="09:00 ~ 18:00" />
        </div>
      </div>
    </div>
  );
}
