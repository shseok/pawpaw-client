'use client';

import { Place } from '@/types/types';
import Image from 'next/image';
import React from 'react';
import PlaceContents from './PlaceContents';
import ModalButton from '../ModalButton';
import { usePlaceModalStore } from '@/hooks/stores/usePlaceModalStore';
import { shallow } from 'zustand/shallow';

export default function PlaceResult({ item }: { item: Place }) {
  const { name, imageUrlList } = item;
  const { isOpen, setIsOpen } = usePlaceModalStore(
    (state) => ({ isOpen: state.isOpen, setIsOpen: state.setIsOpen }),
    shallow,
  );

  return (
    <>
      {isOpen && (
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
              <PlaceContents place={item} />
            </div>
          </div>
        </div>
      )}
      <ModalButton isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
