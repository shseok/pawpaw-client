'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from '@tanstack/react-query';
import getMyBoardList from '@/service/myPage';

interface InfiniteScrollProps {
  infiniteQueryKey: string[];
  pageParameter?: number;
  pageSize?: number;
  inViewThreshold?: number;
}

export default function useGetMyBoardListInfiniteData({
  infiniteQueryKey,
  pageParameter = 1,
  pageSize = 5,
  inViewThreshold = 1,
}: InfiniteScrollProps) {
  const { data, fetchNextPage, isLoading, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: infiniteQueryKey,
      queryFn: ({ pageParam = pageParameter }) =>
        getMyBoardList({ pageParam, pageSize }),
      getNextPageParam: (lastPage, allPages) =>
        allPages.length < 20 ? allPages.length + 1 : undefined,
      select: (d) => ({
        pages: d.pages.flatMap((page) => page),
        pageParams: d.pageParams,
      }),
    });

  // 무한 스크롤 화면 가장 아래 부분 탐지하는 observer
  function Observer({ children }: { children: React.ReactNode }) {
    const { ref, inView } = useInView({ threshold: inViewThreshold });

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
  };
}
