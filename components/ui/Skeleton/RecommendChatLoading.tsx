'use client';

import { SwiperSlide } from 'swiper/react';
import Carousel from '@/components/pages/community/Carousel';
import { Divider, Skeleton } from '@/components/ui/ui';

export default function RecommendChatLoading() {
  return (
    <div className="flex flex-col w-full">
      <h1 className="flex items-center w-full mb-3 text-xl font-bold tablet:mb-5">
        <Skeleton className="hidden w-32 h-8 border rounded-lg tablet:block" />
        <p className="hidden tablet:block">님에게 추천하는 </p>
        <p>신규 채팅방</p>
      </h1>
      <Carousel>
        {new Array(10).fill('').map((_, i) => (
          <SwiperSlide>
            <div
              className="w-full flex flex-col gap-2 max-w-[517px] shadow-chatCard p-4 sm:p-6 rounded-[10px]"
              // eslint-disable-next-line react/no-array-index-key
              key={i}
            >
              <Skeleton className="w-20 h-8 rounded-lg mb-2.5" />
              <Skeleton className="w-40 h-8 mb-8 rounded-lg" />
              <Divider type="horizontal" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Skeleton className="w-10 h-10 rounded-full " />
                  <Skeleton className="w-20 h-5 rounded-lg" />
                </div>
                <Skeleton className="w-20 h-10 rounded-[10px]" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Carousel>
    </div>
  );
}
