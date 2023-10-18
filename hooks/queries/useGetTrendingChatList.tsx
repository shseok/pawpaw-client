import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { getTrendingChatList } from '@/service/community';
import { TrendingChatList } from '@/types/types';
import { queryKeys } from '@/constant/query-keys';

export default function useGetTrendingChatList({ size }: { size: number }) {
  const { data, hasNextPage, isLoading, isFetchingNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: [queryKeys.TRENDING_CHAT_LIST],
      queryFn: ({ pageParam = 0 }): Promise<TrendingChatList> =>
        getTrendingChatList(pageParam, size),
      refetchOnWindowFocus: false,
      getNextPageParam: (chatList) => {
        const lowestTrendingId = chatList.content
          .sort((a, b) => a.trendingId - b.trendingId)
          .at(0)?.trendingId;
        return lowestTrendingId;
      },
    });
  function Observer({ children }: { children: React.ReactNode }) {
    const [ref, inView] = useInView({ threshold: 0.5 });
    useEffect(() => {
      if (!data) return;
      if (hasNextPage && inView) fetchNextPage();
    }, [inView]);
    if (!hasNextPage) return null;
    return (
      <div ref={ref}>{isFetchingNextPage || isLoading ? children : null}</div>
    );
  }
  return { data, Observer, isLoading };
}
