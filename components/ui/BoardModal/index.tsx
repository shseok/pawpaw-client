/* eslint-disable react/no-array-index-key */
import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import { Board } from '@/types/types';
import ModalBoardCard from '@/components/ui/BoardCard/ModalBoardCard';
import FlexBox from '../FlexBox';
import Modal from '../Modal';

export default function BoardModal({
  showModal,
  setShowModal,
  board,
}: {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  board: Board | null;
}) {
  return (
    <Modal open={showModal} onClose={() => setShowModal(false)}>
      <FlexBox direction="column" className="gap-4">
        <FlexBox justify="end" className="w-full">
          <button type="button" onClick={() => setShowModal(false)}>
            <Image
              src="/Feed/desktop/ModalOut.svg"
              alt="나가기"
              width={32}
              height={32}
            />
          </button>
        </FlexBox>
        {board ? (
          <ModalBoardCard
            boardId={board.id}
            userName={board.writer}
            imgs={board.fileNames}
            content={board.title}
            commentsCount={board.replyCount}
            likedCount={board.likedCount}
            createdDate={board.createdDate}
          />
        ) : (
          <div>내용이 없습니다.</div>
        )}
      </FlexBox>
    </Modal>
  );
}
