'use client';

import { SwiperSlide } from 'swiper/react';
import ChatCard from '@/components/ui/ChatCard';
import Carousel from './Carousel';

export default function RecommendChatList() {
  return (
    <div className="p-2 ">
      <h1 className="flex">
        <p className="text-green-600">지상최강감자</p>
        <p>님에게 추천하는 신규 채팅방</p>
      </h1>
      <Carousel>
        <SwiperSlide>
          <ChatCard />
        </SwiperSlide>
        <SwiperSlide>
          <ChatCard />
        </SwiperSlide>
        <SwiperSlide>
          <ChatCard />
        </SwiperSlide>
        <SwiperSlide>
          <ChatCard />
        </SwiperSlide>
        <SwiperSlide>
          <ChatCard />
        </SwiperSlide>
        <SwiperSlide>
          <ChatCard />
        </SwiperSlide>
        <SwiperSlide>
          <ChatCard />
        </SwiperSlide>
      </Carousel>
    </div>
  );
}
