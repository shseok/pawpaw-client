'use client';

import NormalChatCard from '@/components/ui/ChatCard/NormalChatCard';
import useGetRecommendChatList from '@/hooks/queries/useGetRecommendChatList';
import RecommendChatLoading from '@/components/ui/Loading/RecommendChatLoading';
import { Carousel, CarouselSlide } from './Carousel';

export default function RecommendChatList() {
  const { data: recommendChatList, isLoading } = useGetRecommendChatList();

  if (isLoading) return <RecommendChatLoading />;

  return (
    <div>
      <Carousel>
        {recommendChatList?.map((list) => (
          <CarouselSlide key={list.id}>
            <NormalChatCard {...list} />
          </CarouselSlide>
        ))}
      </Carousel>
    </div>
  );
}
