"use client";

import { useInfiniteQuery } from "@tanstack/react-query";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const PAGE_SIZE = 5;

export default function usePostsQuery() {
  return useInfiniteQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: ({ pageParam = 1 }) =>
      fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${pageParam}&_limit=${PAGE_SIZE}`
      ).then((response) => response.json()),
    getNextPageParam: (lastPage, allPages) => {
      return allPages.length < 40 ? allPages.length + 1 : undefined;
    },
  });
}
