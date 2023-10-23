import BoardModal from '@/components/pages/main/Board/BoardModal';
import React from 'react';

export default function BoardModalPage({
  params: { boardId },
}: {
  params: { boardId: number };
}) {
  return <BoardModal boardId={boardId} />;
}
