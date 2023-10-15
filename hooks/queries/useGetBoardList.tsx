'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getBoardList } from '@/service/board';
import { BoardList } from '@/types/types';

interface InfiniteScrollProps {
  infiniteQueryKey: string[];
  pageParameter?: number;
  pageSize?: number;
  inViewThreshold?: number;
}

export default function useGetBoardList({
  infiniteQueryKey,
  pageParameter = 1,
  pageSize = 5,
}: InfiniteScrollProps) {
  const { data, fetchNextPage, isLoading, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: infiniteQueryKey,
      queryFn: ({ pageParam = pageParameter }): Promise<BoardList> =>
        getBoardList({ pageParam, pageSize }),
      getNextPageParam: (boardlist) =>
        boardlist.last ? undefined : boardlist.number + 1,
      select: (d) => ({
        pages: d.pages.flatMap((page) => page),
        pageParams: d.pageParams,
      }),
    });

  // 무한 스크롤 화면 가장 아래 부분 탐지하는 observer
  function Observer({ children }: { children: React.ReactNode }) {
    const { ref, inView } = useInView({ threshold: 1 });

    useEffect(() => {
      if (inView && hasNextPage) {
        fetchNextPage();
      }
    }, [inView]);

    if (!hasNextPage || !data) return null;
    return (
      <div ref={ref}>{isLoading || isFetchingNextPage ? children : null}</div>
    );
  }

  return {
    Observer,
    data,
    isLoading,
    hasNextPage,
  };
}
