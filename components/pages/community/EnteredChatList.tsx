'use client';

import { SwiperSlide } from 'swiper/react';
import useGetEnteredChatList from '@/hooks/queries/useGetEnteredChatList';
import ImageChatCard from '@/components/ui/ChatCard/ImageChatCard';
import EnteredChatLoading from '@/components/ui/Loading/EnteredChatLoading';
import FlexBox from '@/components/ui/FlexBox';
import Carousel from './Carousel';

export default function EnteredChatList() {
  const { data: chatList, isLoading } = useGetEnteredChatList();

  return (
    <FlexBox direction="column" className="">
      <div className="flex flex-col w-full gap-2">
        <h1 className="w-full header2">참여중인 채팅방</h1>
        {chatList?.length === 0 && (
          <div className="w-full header4">현재 참여중인 채팅방이 없어요.</div>
        )}
      </div>
      {isLoading ? (
        <EnteredChatLoading />
      ) : (
        <Carousel>
          {chatList?.map((list) => (
            <SwiperSlide key={list.id}>
              <ImageChatCard {...list} />
            </SwiperSlide>
          ))}
        </Carousel>
      )}
    </FlexBox>
  );
}
