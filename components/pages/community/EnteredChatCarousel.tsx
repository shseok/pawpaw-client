'use client';

import { SwiperSlide } from 'swiper/react';
import ImageChatCard from '@/components/ui/ChatCard/ImageChatCard';
import { EnteredChatList } from '@/types/types';
import Carousel from './Carousel';

export default function EnteredChatCarousel({
  enteredChatlist,
}: {
  enteredChatlist: EnteredChatList[];
}) {
  if (enteredChatlist.length === 0) {
    return <div className="header2">참여중인 채팅방이 없어요.🐶</div>;
  }
  return (
    <Carousel>
      {enteredChatlist &&
        enteredChatlist.map((list) => (
          <SwiperSlide key={list.name}>
            <ImageChatCard {...list} />
          </SwiperSlide>
        ))}
    </Carousel>
  );
}
