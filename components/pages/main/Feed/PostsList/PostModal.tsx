/* eslint-disable react/no-array-index-key */
import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import { Comment, Post } from '@/types/types';
import ModalPostCard from '@/components/pages/main/Feed/PostsList/PostCard/ModalPostCard';
import FlexBox from '../../../../ui/FlexBox';
import Modal from '../../../../ui/Modal';

export default function PostModal({
  showModal,
  setShowModal,
  post,
  comments,
}: {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  post: Post | null;
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
          <ModalPostCard
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
