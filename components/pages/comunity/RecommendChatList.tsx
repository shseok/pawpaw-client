'use client';

import { SwiperSlide } from 'swiper/react';
import ChatCard from '@/components/ui/ChatCard';
import FlexBox from '@/components/ui/FlexBox';
import Carousel from './Carousel';

export default function RecommendChatList() {
  return (
    <FlexBox direction="column" className="gap-5">
      <h1 className="flex w-full text-xl font-bold">
        <p className="hidden text-green-600 tablet:block">지상최강감자</p>
        <p className="hidden tablet:block">님에게 추천하는 </p>
        <p>신규 채팅방</p>
      </h1>
      <Carousel>
        {Array.from({ length: 10 }).map((_, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <SwiperSlide key={i}>
            <ChatCard />
          </SwiperSlide>
        ))}
      </Carousel>
    </FlexBox>
  );
}
