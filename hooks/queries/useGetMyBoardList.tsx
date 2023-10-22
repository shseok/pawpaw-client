import { getMyBoardList } from '@/service/myPage';
import { MyBoardList } from '@/types/types';
import { queryKeys } from '@/constant/query-keys';
import useInfiniteScroll from '../common/useInfiniteScroll';

export default function useGetMyBoardList() {
  const { data, isLoading, Observer } = useInfiniteScroll<MyBoardList>({
    queryKey: [queryKeys.MY_BOARD_LIST],
    firstPageParam: 0,
    queryFn: getMyBoardList,
    getNextPageParamFn: (boardlist) =>
      boardlist.last ? undefined : boardlist.number + 1,
    params: [],
  });

  return {
    Observer,
    data,
    isLoading,
  };
}
