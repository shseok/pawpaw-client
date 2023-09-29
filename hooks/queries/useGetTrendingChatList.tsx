import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { getTrendingChatList } from '@/service/community';

export default function useGetTrendingChatList() {
  const { data, hasNextPage, isLoading, isFetchingNextPage, fetchNextPage } =
    useInfiniteQuery(
      ['trendingChatList'],
      ({ pageParam = 0 }) => getTrendingChatList(pageParam),
      {
        getNextPageParam: (chatList) => {
          const lowestTrendingId = chatList.content
            .sort((a, b) => a.trendingId - b.trendingId)
            .at(0)?.trendingId;
          return lowestTrendingId;
        },
      },
    );
  function Observer({ children }: { children: React.ReactNode }) {
    const [ref, inView] = useInView();
    useEffect(() => {
      if (!data) return;
      if (hasNextPage && inView) fetchNextPage();
    }, [inView]);
    if (!hasNextPage) return null;
    return (
      <div ref={ref}>{isFetchingNextPage || isLoading ? children : null}</div>
    );
  }
  return { data, Observer };
}
