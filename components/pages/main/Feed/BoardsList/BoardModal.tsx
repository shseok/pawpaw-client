/* eslint-disable react/no-array-index-key */
import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import { Comment, BoardList } from '@/types/types';
import ModalBoardCard from '@/components/ui/BoardCard/ModalBoardCard';
import FlexBox from '../../../../ui/FlexBox';
import Modal from '../../../../ui/Modal';

export default function BoardModal({
  showModal,
  setShowModal,
  board,
  comments,
}: {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  board: BoardList | null;
  comments: Comment[] | undefined;
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
            userId={board.writer}
            imgs={[
              // TODO: 이미지 연결
              '/Feed/desktop/tempPostPic/tempPostPic1.svg',
              '/Feed/desktop/tempPostPic/tempPostPic3.svg',
            ]}
            content={board.title}
            comments={comments}
          />
        ) : (
          <div>내용이 없습니다.</div>
        )}
      </FlexBox>
    </Modal>
  );
}
