'use client';

import { SwiperSlide } from 'swiper/react';
import Carousel from '@/components/pages/community/Carousel';
import Skeleton from './Skeleton';
import Divider from '../Divider';

export default function EnteredChatLoading() {
  return (
    <Carousel>
      {new Array(10).fill('').map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <SwiperSlide key={`entered-${index}`}>
          <div className="shadow-chatCard w-full max-w-[517px] h-full max-h-[538px] rounded-[10px]">
            <div className="flex flex-col gap-4 p-5">
              <Skeleton className="rounded-[10px] w-full h-80" />
              <div className="flex items-center justify-between">
                <Skeleton className="w-40 h-6 rounded-lg" />
                <Skeleton className="w-20 h-6 rounded-lg" />
              </div>
              <Divider type="horizontal" />
              <div className="flex justify-between w-full">
                <div className="flex items-center gap-2">
                  <Skeleton className="w-10 h-10 rounded-full" />
                  <Skeleton className="w-24 h-8 rounded-lg" />
                </div>
                <div className="flex gap-2">
                  <Skeleton className="w-10 h-10 rounded-full" />
                  <Skeleton className="w-10 h-10 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Carousel>
  );
}
