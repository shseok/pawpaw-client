'use client';

import useGetInfiniteData from '@/hooks/queries/InfiniteData';
import ChatCard from '@/components/ui/ChatCard';
import FlexBox from '@/components/ui/FlexBox';

export default function TrendingChatList() {
  const { data, Observer } = useGetInfiniteData({
    infiniteQueryKey: ['trendingChatList'],
    pageParameter: 1,
    pageSize: 5,
    inViewThreshold: 1,
  });

  return (
    <FlexBox direction="column" className="gap-3 tablet:gap-5">
      <h1 className="w-full text-xl font-bold">지금 뜨고 있는 채팅방</h1>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {data?.pages.map((el) => <ChatCard key={el.id} />)}
        <Observer>로딩중...</Observer>
      </div>
    </FlexBox>
  );
}
