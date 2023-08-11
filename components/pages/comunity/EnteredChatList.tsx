'use client';

import { SwiperSlide } from 'swiper/react';
import EnteredChatCard from '@/components/ui/EnteredChatCard';
import FlexBox from '@/components/ui/FlexBox';
import Carousel from './Carousel';

export default function EnteredChatList() {
  return (
    <FlexBox direction="column" className="w-full h-full ">
      <h1 className="w-full">참여중인 채팅방</h1>
      <Carousel>
        <SwiperSlide>
          <EnteredChatCard />
        </SwiperSlide>
        <SwiperSlide>
          <EnteredChatCard />
        </SwiperSlide>
        <SwiperSlide>
          <EnteredChatCard />
        </SwiperSlide>
        <SwiperSlide>
          <EnteredChatCard />
        </SwiperSlide>
        <SwiperSlide>
          <EnteredChatCard />
        </SwiperSlide>
        <SwiperSlide>
          <EnteredChatCard />
        </SwiperSlide>
        <SwiperSlide>
          <EnteredChatCard />
        </SwiperSlide>
        <SwiperSlide>
          <EnteredChatCard />
        </SwiperSlide>
      </Carousel>
    </FlexBox>
  );
}
