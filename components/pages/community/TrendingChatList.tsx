'use client';

import { useEffect } from 'react';
import useGetInfiniteData from '@/hooks/queries/InfiniteData';
import FlexBox from '@/components/ui/FlexBox';
import NormalChatCard from '@/components/ui/ChatCard/NormalChatCard';
import { getTrendingChatList } from '@/service/community';

export default function TrendingChatList() {
  const { data, Observer } = useGetInfiniteData({
    infiniteQueryKey: ['trendingChatList'],
    pageParameter: 1,
    pageSize: 5,
    inViewThreshold: 1,
  });
  useEffect(() => {
    getTrendingChatList(2).then((res) => console.log(res));
  }, []);

  return (
    <FlexBox direction="column" className="gap-3 tablet:gap-5">
      <h1 className="w-full text-xl font-bold">지금 뜨고 있는 채팅방</h1>
      <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 min-[1921px]:grid-cols-4">
        {data?.pages.map((el) => <NormalChatCard key={el.id} />)}
        <Observer>로딩중...</Observer>
      </div>
    </FlexBox>
  );
}
