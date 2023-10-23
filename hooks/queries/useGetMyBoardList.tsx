import { getMyBoardList } from '@/service/myPage';
import { Board, MyBoardList } from '@/types/types';
import { queryKeys } from '@/constant/query-keys';
import useInfiniteScroll from '../common/useInfiniteScroll';

export default function useGetMyBoardList() {
  const { data, isLoading, Observer } = useInfiniteScroll<MyBoardList, Board>({
    queryKey: [queryKeys.MY_BOARD_LIST],
    firstPageParam: 0,
    queryFn: getMyBoardList,
    getNextPageParamFn: (boardlist) =>
      boardlist.last ? undefined : boardlist.number + 1,
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
  };
}
