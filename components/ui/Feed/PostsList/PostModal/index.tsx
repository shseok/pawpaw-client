/* eslint-disable react/no-array-index-key */
import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import { Comment, Post } from '@/types/types';
import Modal from '@/components/ui/Modal';
import FlexBox from '../../../FlexBox';
import ModalHeader from './ModalHeader';
import ModalContent from './ModalContent';
import ModalCommentWrapper from './ModalCommentWrapper';
import ModalComments from './ModalComments';

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
  const filteredCommentsCount = comments ? comments.length : 0;

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
          <FlexBox
            direction="column"
            className="w-[1028px] h-[720px] p-9 gap-4 bg-white opacity-100 border-[1px] border-grey-200 rounded-[10px]"
          >
            <ModalHeader userId={post.albumId} />
            <ModalContent imageUrl={post.url} content={post.title}>
              <ModalCommentWrapper commentsNum={filteredCommentsCount}>
                {comments?.map((comment) => (
                  <ModalComments
                    id={comment.id}
                    userName={comment.User.name}
                    content={comment.content}
                    userImg="/Feed/desktop/tempProfilePic.svg"
                  />
                ))}
              </ModalCommentWrapper>
            </ModalContent>
          </FlexBox>
        ) : (
          <div>내용이 없습니다.</div>
        )}
      </FlexBox>
    </Modal>
  );
}
