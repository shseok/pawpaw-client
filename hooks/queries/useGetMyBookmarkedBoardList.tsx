import { getBookmarkedBoardList } from '@/service/myPage';
import { BookmarkedBoardList } from '@/types/types';
import { queryKeys } from '@/constant/query-keys';
import useInfiniteScroll from '../common/useInfiniteScroll';

export default function useGetBookmarkedBoardList() {
  const { data, isLoading, Observer } = useInfiniteScroll<BookmarkedBoardList>({
    queryKey: [queryKeys.MY_BOOKMARKED_LIST],
    firstPageParam: 0,
    queryFn: getBookmarkedBoardList,
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
