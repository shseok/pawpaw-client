import React from 'react';
import CardList from '../Search/CardList';
import Image from 'next/image';
import PlaceContents from './PlaceContents';

interface Props {
  imageSrc: string;
}

export default function PlaceScreen({ imageSrc }: Props) {
  return (
    <div className="flex flex-col">
      <Image
        width={460}
        height={460}
        src={imageSrc}
        alt={'test'}
        className="object-fill"
      />
      <PlaceContents
        name="탑골공원"
        address="서울 종로구 종로 99 탑골공원"
        rating={4.8}
        time="09:00 ~ 18:00"
      />
    </div>
  );
}
