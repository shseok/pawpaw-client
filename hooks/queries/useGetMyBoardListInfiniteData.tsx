'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from '@tanstack/react-query';
import getMyBoardList from '@/service/myPage';

const QUERY_KEY = ['myBoards'];

export default function useGetMyBoardListInfiniteData() {
  const { data, fetchNextPage, isLoading, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: QUERY_KEY,
      queryFn: ({ pageParam = 0 }) => getMyBoardList(pageParam),
      getNextPageParam: (lastPage, allPages) =>
        allPages.length < 20 ? allPages.length + 1 : undefined,
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
  };
}
