import MyBoardCard from '@/components/ui/BoardCard/MyPageBoardCard';
import MyBoardListLoading from '@/components/ui/Loading/MyBoardListLoading';
import useGetBookmarkedBoardList from '@/hooks/queries/useGetMyBookmarkedBoardList';
import Link from 'next/link';

export default function BookmarkedBoardsList() {
  const { Observer, data, isLoading } = useGetBookmarkedBoardList();
  if (isLoading) {
    return <MyBoardListLoading />;
  }
  if (!data) {
    return <div>아직 북마크한 게시물이 없어요ㅠㅠ</div>;
  }
  return (
    <div className="grid w-full gap-5 tablet:grid-cols-2 tablet:mt-4">
      {data?.pages?.map((board) => (
        <div key={board.id} className="w-full">
          <Link key={board.id} href={`/board/${board.id}`}>
            <MyBoardCard board={board} />
          </Link>
        </div>
      ))}
      <Observer>
        <div>로딩중...</div>
      </Observer>
    </div>
  );
}
