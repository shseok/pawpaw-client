'use client';

import { SwiperSlide } from 'swiper/react';
import FlexBox from '@/components/ui/FlexBox';
import ImageChatCard from '@/components/ui/ChatCard/ImageChatCard';
import Carousel from './Carousel';

export default function EnteredChatList() {
  return (
    <FlexBox direction="column" className="gap-3 tablet:gap-5">
      <h1 className="flex w-full text-xl font-bold">
        <p className="text-green-600">지상최강감자</p>
        <p>님이 참여한 채팅방</p>
      </h1>
      <Carousel>
        {Array.from({ length: 10 }).map((_, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <SwiperSlide key={i} className="">
            <ImageChatCard />
          </SwiperSlide>
        ))}
      </Carousel>
    </FlexBox>
  );
}
