'use client';

import { getCommentList } from '@/service/board';
import { CommentList } from '@/types/types';
import useInfiniteScroll from '../common/useInfiniteScroll';

export default function useGetCommentList(boardId: number) {
  const { data, isLoading, Observer, hasNextPage } =
    useInfiniteScroll<CommentList>({
      queryKey: 'commentList',
      firstPageParam: 0,
      queryFn: getCommentList,
      getNextPageParamFn: (boardList) =>
        boardList.last ? undefined : boardList.number + 1,
      params: [boardId],
    });

  return {
    Observer,
    data,
    isLoading,
    hasNextPage,
  };
}
