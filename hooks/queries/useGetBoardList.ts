'use client';

import { getBoardList } from '@/service/board';
import { BoardList } from '@/types/types';
import { queryKeys } from '@/constant/query-keys';
import useInfiniteScroll from '../common/useInfiniteScroll';

export default function useGetBoardList() {
  const { data, isLoading, Observer, hasNextPage } =
    useInfiniteScroll<BoardList>({
      queryKey: [queryKeys.BOARD_LIST],
      firstPageParam: 0,
      queryFn: getBoardList,
      getNextPageParamFn: (boardList) =>
        boardList.last ? undefined : boardList.number + 1,
      params: [],
    });

  return {
    Observer,
    data,
    isLoading,
    hasNextPage,
  };
}
