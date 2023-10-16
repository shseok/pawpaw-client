import getMyBoardList from '@/service/myPage';
import { BookmarkedBoardList } from '@/types/types';
import useInfiniteScroll from '../common/useInfiniteScroll';

export default function useGetBookmarkedBoardList() {
  const { data, isLoading, Observer } = useInfiniteScroll<BookmarkedBoardList>({
    queryKey: 'myBookmarkedBoards',
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
