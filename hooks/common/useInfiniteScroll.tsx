'use client';

import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface InfiniteScrollProps<T, P = undefined> {
  queryKey: string[];
  firstPageParam: number;
  queryFn: (pageNumber: number, ...params: number[]) => Promise<T>;
  getNextPageParamFn: (page: T) => void;
  params: number[];
  selectFn?: (data: InfiniteData<T>) => InfiniteData<P>;
}

export default function useInfiniteScroll<T, P = undefined>({
  queryKey,
  firstPageParam,
  queryFn,
  getNextPageParamFn,
  params,
  selectFn,
}: InfiniteScrollProps<T, P>) {
  const { data, fetchNextPage, isLoading, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey,
      queryFn: ({ pageParam = firstPageParam }): Promise<T> =>
        queryFn(pageParam, ...params),
      getNextPageParam: getNextPageParamFn,
      select: selectFn,
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
