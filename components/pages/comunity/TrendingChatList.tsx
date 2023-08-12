'use client';

import useGetInfiniteData from '@/hooks/queries/InfiniteData';
import ChatCard from '@/components/ui/ChatCard';

export default function TrendingChatList() {
  const { data, Observer } = useGetInfiniteData({
    infiniteQueryKey: ['trendingChatList'],
    pageParameter: 1,
    pageSize: 5,
    inViewThreshold: 1,
  });

  return (
    <>
      <h1 className="pl-2 text-xl font-bold">지금 뜨고 있는 채팅방</h1>
      <div className="grid grid-cols-1 gap-5 px-2 md:grid-cols-2 xl:grid-cols-3">
        {data?.pages.map((el) => <ChatCard key={el.id} />)}
        <Observer>로딩중...</Observer>
      </div>
    </>
  );
}
