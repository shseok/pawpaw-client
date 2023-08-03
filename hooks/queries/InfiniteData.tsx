"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";

interface InfiniteScrollProps<T> {
  infiniteQueryKey: string[];
  apiAddress: string;
  pageParameter?: number;
  pageSize?: number;
  inViewThreshold?: number;
}

export default function useGetInfiniteData<T>({
  infiniteQueryKey,
  apiAddress,
  pageParameter = 1,
  pageSize = 5,
  inViewThreshold = 1,
}: InfiniteScrollProps<T>) {
  const fetchData = async ({
    pageParam,
  }: {
    pageParam: number;
  }): Promise<T> => {
    const res = await fetch(
      `${apiAddress}?_page=${pageParam}&_limit=${pageSize}`
    );
    return res.json();
  };

  const { data, fetchNextPage, isLoading, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: infiniteQueryKey,
      queryFn: ({ pageParam = pageParameter }) => fetchData(pageParam),
      getNextPageParam: (lastPage, allPages) => {
        return allPages.length < 20 ? allPages.length + 1 : undefined;
      },
      select: (data) => ({
        pages: data.pages.flatMap((page) => page),
        pageParams: data.pageParams,
      }),
    });

  // 무한 스크롤 화면 가장 아래 부분 탐지하는 observer
  const Observer = ({ children }: { children: React.ReactNode }) => {
    const { ref, inView } = useInView({ threshold: inViewThreshold });

    useEffect(() => {
      console.log(inView, "무한 스크롤 커몬 🍦");
      if (inView && hasNextPage) {
        fetchNextPage();
      }
    }, [inView]);

    if (!hasNextPage || !data) return null;
    return (
      <div ref={ref}>{isLoading || isFetchingNextPage ? children : null}</div>
    );
  };

  return {
    Observer,
    data,
  };
}
