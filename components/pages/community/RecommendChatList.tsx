'use client';

import { SwiperSlide } from 'swiper/react';
import FlexBox from '@/components/ui/FlexBox';
import useGetRecommendChatList from '@/hooks/queries/useGetRecommendChatList';
import NormalChatCard from '@/components/ui/ChatCard/NormalChatCard';
import RecommendChatLoading from '@/components/ui/Skeleton/RecommendChatLoading';
import useGetUserInfo from '@/hooks/queries/useGetUserInfo';
import Carousel from './Carousel';

export default function RecommendChatList() {
  const { data, isLoading } = useGetRecommendChatList();
  const { data: userInfo } = useGetUserInfo();
  return (
    <FlexBox direction="column" className="gap-3 tablet:gap-5">
      <h1 className="flex w-full mb-3 text-xl font-bold tablet:mb-5">
        <p className="hidden text-green-600 tablet:block">
          {userInfo?.nickname}
        </p>
        <p className="hidden tablet:block">님에게 추천하는 </p>
        <p>신규 채팅방</p>
      </h1>
      {isLoading ? (
        <RecommendChatLoading />
      ) : (
        <Carousel>
          {data &&
            data.map((list) => (
              <SwiperSlide key={list.id}>
                <NormalChatCard {...list} />
              </SwiperSlide>
            ))}
        </Carousel>
      )}
    </FlexBox>
  );
}
