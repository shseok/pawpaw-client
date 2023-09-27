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
