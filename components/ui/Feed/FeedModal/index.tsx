/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import Image from 'next/image';
import { Comment, Post } from '@/types/types';
import FlexBox from '../../FlexBox';
import ModalHeader from './ModalHeader';
import ModalContent from './ModalContent';
import ModalCommentWrapper from './ModalCommentWrapper';
import ModalComments from './ModalComments';

export default function FeedModal({
  onClick,
  post,
  comment,
}: {
  onClick: () => void;
  post: Post | null;
  comment: Comment[] | undefined;
}) {
  const filteredCommentsCount = comment ? comment.length : 0;
  return (
    <div onClick={onClick}>
      <FlexBox className="fixed top-0 left-0 z-10 w-full h-full bg-black/25">
        <div onClick={(e) => e.stopPropagation()}>
          <FlexBox direction="column" className="gap-4">
            <FlexBox justify="end" className="w-full">
              <Image
                src="/Feed/desktop/ModalOut.svg"
                alt="나가기"
                width={32}
                height={32}
              />
            </FlexBox>
            {post ? (
              <FlexBox
                direction="column"
                className="w-[1028px] h-[720px] p-9 gap-4 bg-white opacity-100 border-[1px] border-grey-200 rounded-[10px]"
              >
                <ModalHeader userId={post.albumId} />
                <ModalContent imageUrl={post.url} content={post.title}>
                  <ModalCommentWrapper commentsNum={filteredCommentsCount}>
                    {comment?.map((com) => (
                      <ModalComments
                        commentId={com.id}
                        commentUserName={com.User.name}
                        commentContent={com.content}
                        commentUserImg="/Feed/desktop/tempProfilePic.svg"
                      />
                    ))}
                  </ModalCommentWrapper>
                </ModalContent>
              </FlexBox>
            ) : (
              <div>내용이 없습니다.</div>
            )}
          </FlexBox>
        </div>
      </FlexBox>
    </div>
  );
}
