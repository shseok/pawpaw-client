'use client';

import { SwiperSlide } from 'swiper/react';
import FlexBox from '@/components/ui/FlexBox';
import useGetRecommendChatList from '@/hooks/queries/useGetRecommendChatList';
import NormalChatCard from '@/components/ui/ChatCard/NormalChatCard';
import RecommendChatLoading from '@/components/ui/Skeleton/RecommendChatLoading';
import Carousel from './Carousel';

export default function RecommendChatList() {
  const { data, isLoading } = useGetRecommendChatList();
  if (isLoading) {
    return <RecommendChatLoading />;
  }
  return (
    <FlexBox direction="column" className="gap-3 tablet:gap-5">
      <Carousel>
        {data &&
          data.map((list) => (
            <SwiperSlide key={list.id}>
              <NormalChatCard {...list} />
            </SwiperSlide>
          ))}
      </Carousel>
    </FlexBox>
  );
}
