/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import MyBoardCard from '@/components/ui/BoardCard/MyPageBoardCard';
import useGetMyBoardList from '@/hooks/queries/useGetMyBoardList';
import MyBoardListLoading from '@/components/ui/Loading/MyBoardListLoading';
import Link from 'next/link';

export default function MyBoardsList() {
  const { Observer, data: myBoards, isLoading } = useGetMyBoardList();
  if (isLoading) {
    return <MyBoardListLoading />;
  }
  if (myBoards?.pages) {
    return <div>아직 게시물이 없어요ㅠㅠ</div>;
  }
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      <div className="grid w-full gap-5 tablet:grid-cols-2 tablet:mt-4">
        {myBoards &&
          myBoards?.pages?.map((page) =>
            page.content.map((board) => (
              <div key={board.id} className="w-full">
                <Link key={board.id} href={`/board/${board.id}`}>
                  <MyBoardCard board={board} />
                </Link>
              </div>
            )),
          )}
        <Observer>
          <div>로딩중...</div>
        </Observer>
      </div>
    </>
  );
}
