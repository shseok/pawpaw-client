'use client';

import getMyBoardList from '@/service/myPage';
import { MyBoardList } from '@/types/types';
import useInfiniteScroll from '../common/useInfiniteScroll';

export default function useGetMyBoardList() {
  const { data, isLoading, Observer } = useInfiniteScroll<MyBoardList>({
    queryKey: 'myBoards',
    firstPageParam: 0,
    queryFn: getMyBoardList,
    getNextPageParamFn: (boardlist) =>
      boardlist.last ? undefined : boardlist.number + 1,
  });

  return {
    Observer,
    data,
    isLoading,
  };
}
