'use client';

import { SwiperSlide } from 'swiper/react';
import NormalChatCard from '@/components/ui/ChatCard/NormalChatCard';
import { RecommendedChatList } from '@/types/types';
import Carousel from './Carousel';

export default function RecommendChatCarousel({
  recommendedChatList,
}: {
  recommendedChatList: RecommendedChatList[];
}) {
  const login = async () => {
    const response = await fetch(`/api/auth`, {
      method: 'POST',
      body: JSON.stringify({
        email: 'test8@gmail.com',
        password: '1234',
      }),
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response);
  };

  return (
    <>
      <button type="button" onClick={login}>
        로그인
      </button>
      <Carousel>
        {recommendedChatList &&
          recommendedChatList.map((list) => (
            <SwiperSlide key={list.id}>
              <NormalChatCard {...list} />
            </SwiperSlide>
          ))}
      </Carousel>
    </>
  );
}
