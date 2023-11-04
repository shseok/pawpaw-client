'use client';

import ImageChatCard from '@/components/ui/ChatCard/ImageChatCard';
import useGetEnteredChatList from '@/hooks/queries/useGetEnteredChatList';
import EnteredChatLoading from '@/components/ui/Loading/EnteredChatLoading';
import { Carousel, CarouselSlide } from './Carousel';

export default function EnteredChatList() {
  const { data: chatList, isLoading } = useGetEnteredChatList();

  if (isLoading) return <EnteredChatLoading />;
  if (chatList?.length === 0)
    return <div className="w-full header3">현재 참여중인 채팅방이 없어요.</div>;
  return (
    <Carousel>
      {chatList?.map((list) => (
        <CarouselSlide key={list.id}>
          <ImageChatCard {...list} />
        </CarouselSlide>
      ))}
    </Carousel>
  );
}
