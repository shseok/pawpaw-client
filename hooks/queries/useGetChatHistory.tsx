import { useInfiniteQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { getChatHistory } from '@/service/chatRoom';

export default function useGetChatHistory(roomId: string) {
  const { data, hasNextPage, isLoading, isFetchingNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ['chatHistory'],
      queryFn: ({ pageParam = 0 }) => getChatHistory(roomId, pageParam),
      refetchOnWindowFocus: false,
      getNextPageParam: (history) => {
        // console.log(history);
      },
    });
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
