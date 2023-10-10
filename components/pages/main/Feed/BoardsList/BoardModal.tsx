/* eslint-disable react/no-array-index-key */
import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import { Comment, Board } from '@/types/types';
import ModalBoardCard from '@/components/pages/main/Feed/BoardsList/BoardCard/ModalBoardCard';
import FlexBox from '../../../../ui/FlexBox';
import Modal from '../../../../ui/Modal';

export default function BoardModal({
  showModal,
  setShowModal,
  post,
  comments,
}: {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  post: Board | null;
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
        {post ? (
          <ModalBoardCard
            userId={post.albumId}
            imgs={[
              post.url,
              '/Feed/desktop/tempPostPic/tempPostPic1.svg',
              '/Feed/desktop/tempPostPic/tempPostPic3.svg',
            ]}
            content={post.title}
            comments={comments}
          />
        ) : (
          <div>내용이 없습니다.</div>
        )}
      </FlexBox>
    </Modal>
  );
}
