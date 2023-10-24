'use client';

import BoardIdCard from '@/components/ui/BoardCard/BoardIdCard';

export default function Board({ boardId }: { boardId: number }) {
  return (
    <div className="w-full">
      <BoardIdCard boardId={boardId} />
    </div>
  );
}
