/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import useGetBoardList from '@/hooks/queries/useGetBoardList';
import FeedBoardLoading from '@/components/ui/Loading/FeedBoardLoading';
import Link from 'next/link';
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
        boardList?.pages &&
        boardList?.pages?.map((page) =>
          page.content.length > 0 ? (
            page.content.map((board) => (
              <div key={board.id} className="w-full">
                <Link key={board.id} href={`/board/${board.id}`}>
                  <FeedBoardCard board={board} />
                </Link>
              </div>
            ))
          ) : (
            <div>아직 게시물이 없어요ㅠㅠ</div>
          ),
        )
      )}
      {hasNextPage ? null : <div>🐾 더이상 게시물이 없어요 🐾</div>}
      <Observer>
        <div>로딩중...🐾</div>
      </Observer>
    </FlexBox>
  );
}
