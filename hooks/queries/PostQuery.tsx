"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const PAGE_SIZE = 5;

export default function usePostsQuery() {
  return useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: ({ pageParam = 1 }) =>
      axios
        .get<Post[]>(`https://jsonplaceholder.typicode.com/posts`, {
          params: { _page: pageParam, _limit: PAGE_SIZE },
        })
        .then((res) => res.data),
    getNextPageParam: (lastPage, allPages) => {
      return allPages.length < 40 ? allPages.length + 1 : undefined;
    },
  });
}
