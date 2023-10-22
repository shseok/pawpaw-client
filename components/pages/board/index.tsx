'use client';

import BoardIdCard from '@/components/ui/BoardCard/BoardIdCard';
// import useGetBoard from '@/hooks/queries/useGetBoard';

export default function Board({ boardId }: { boardId: number }) {
  // const { data } = useGetBoard(boardId);
  // if (data) {
  return (
    <div className="w-full">
      <BoardIdCard boardId={boardId} />
    </div>
  );
  // }
}
