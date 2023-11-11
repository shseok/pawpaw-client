'use client';

import { getBoardList } from '@/service/board';
import { Board, BoardList } from '@/types/types';
import { queryKeys } from '@/constant/query-keys';
import useInfiniteScroll from '../common/useInfiniteScroll';

export default function useGetBoardList() {
  const { data, isLoading, Observer, hasNextPage } = useInfiniteScroll<
    BoardList,
    Board
  >({
    queryKey: [queryKeys.BOARD_LIST],
    firstPageParam: 1,
    queryFn: getBoardList,
    getNextPageParamFn: (boardList) =>
      boardList.last ? undefined : boardList.number + 1,
    params: [],
    selectFn: (d) => ({
      pages: d.pages.flatMap((page) => page.content),
      pageParams: d.pageParams,
    }),
  });

  return {
    Observer,
    data,
    isLoading,
    hasNextPage,
  };
}
