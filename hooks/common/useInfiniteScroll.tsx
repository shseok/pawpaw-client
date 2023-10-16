'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface InfiniteScrollProps<T> {
  queryKey: string;
  firstPageParam: number;
  queryFn: (pageNumber: number) => Promise<T>;
  getNextPageParamFn: (page: T) => void;
}

export default function useInfiniteScroll<T>({
  queryKey,
  firstPageParam,
  queryFn,
  getNextPageParamFn,
}: InfiniteScrollProps<T>) {
  const { data, fetchNextPage, isLoading, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: [queryKey],
      queryFn: ({ pageParam = firstPageParam }): Promise<T> =>
        queryFn(pageParam),
      getNextPageParam: getNextPageParamFn,
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
