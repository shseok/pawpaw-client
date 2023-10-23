import useGetBoardList from '@/hooks/queries/useGetBoardList';
import FeedBoardLoading from '@/components/ui/Loading/FeedBoardLoading';
import FlexBox from '../../../../ui/FlexBox';
import FeedBoardCard from '../../../../ui/BoardCard/FeedBoardCard';

export default function BoardsList() {
  const {
    Observer,
    data: boardList,
    isLoading,
    hasNextPage,
  } = useGetBoardList();

  return (
    <FlexBox direction="column" className="w-full gap-10">
      {isLoading ? (
        <FeedBoardLoading />
      ) : (
        boardList?.pages?.map((board) => (
          <div key={board.id} className="w-full">
            <FeedBoardCard board={board} />
          </div>
        ))
      )}
      {hasNextPage ? null : <div>🐾 더이상 게시물이 없어요 🐾</div>}
      <Observer>
        <div>로딩중...🐾</div>
      </Observer>
    </FlexBox>
  );
}
