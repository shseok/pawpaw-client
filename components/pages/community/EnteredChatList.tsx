'use client';

import { SwiperSlide } from 'swiper/react';
import useGetEnteredChatList from '@/hooks/queries/useGetEnteredChatList';
import ImageChatCard from '@/components/ui/ChatCard/ImageChatCard';
import EnteredChatLoading from '@/components/ui/Loading/EnteredChatLoading';
import Carousel from './Carousel';

export default function EnteredChatList() {
  const { data, isLoading } = useGetEnteredChatList();
  if (isLoading) {
    return <EnteredChatLoading />;
  }
  return (
    <Carousel>
      {data &&
        data.map((list) => (
          <SwiperSlide key={list.id}>
            <ImageChatCard {...list} />
          </SwiperSlide>
        ))}
    </Carousel>
  );
}
