'use client';

import NormalChatCard from '@/components/ui/ChatCard/NormalChatCard';
import useGetRecommendChatList from '@/hooks/queries/useGetRecommendChatList';
import RecommendChatLoading from '@/components/ui/Loading/RecommendChatLoading';
import { SwiperSlide } from 'swiper/react';
import Carousel from './Carousel';

export default function RecommendChatList() {
  const { data: recommendChatList, isLoading } = useGetRecommendChatList();

  if (isLoading) return <RecommendChatLoading />;
  return (
    <Carousel>
      {recommendChatList?.map((list) => (
        <SwiperSlide key={list.id}>
          <NormalChatCard {...list} />
        </SwiperSlide>
      ))}
    </Carousel>
  );
}
