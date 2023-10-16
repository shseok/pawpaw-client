'use client';

import { getBoardList } from '@/service/board';
import { BoardList } from '@/types/types';
import useInfiniteScroll from '../common/useInfiniteScroll';

export default function useGetBoardList() {
  const { data, isLoading, Observer, hasNextPage } =
    useInfiniteScroll<BoardList>({
      queryKey: 'boardsList',
      firstPageParam: 0,
      queryFn: getBoardList,
      getNextPageParamFn: (boardList) =>
        boardList.last ? undefined : boardList.number + 1,
    });

  return {
    Observer,
    data,
    isLoading,
    hasNextPage,
  };
}
