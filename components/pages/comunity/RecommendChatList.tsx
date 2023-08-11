'use client';

import { SwiperSlide } from 'swiper/react';
import ChatCard from '@/components/ui/ChatCard';
import FlexBox from '@/components/ui/FlexBox';
import Carousel from './Carousel';

export default function RecommendChatList() {
  return (
    <FlexBox direction="column" className="gap-1">
      <h1 className="flex w-full p-2">
        <p className="text-green-600">지상최강감자</p>
        <p>님에게 추천하는 신규 채팅방</p>
      </h1>
      <Carousel>
        {Array.from({ length: 10 }).map((_, i) => (
          <SwiperSlide key={i}>
            <ChatCard />
          </SwiperSlide>
        ))}
      </Carousel>
    </FlexBox>
  );
}
