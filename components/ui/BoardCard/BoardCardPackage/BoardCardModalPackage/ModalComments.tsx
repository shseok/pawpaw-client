'use client';

import { useState } from 'react';
import Avatar from '@/components/ui/Avatar';
import useDeleteComment from '@/hooks/mutations/useDeleteComment';
import DotsIcon from 'public/DotsIcon.svg';
import FlexBox from '../../../FlexBox';
import Modal from '../../../Modal';

export default function BoardCardModalComments({
  boardId,
  id,
  userName,
  content,
  isUser,
  userImage,
}: {
  boardId: number;
  id: number;
  userName: string;
  content: string;
  isUser: boolean;
  userImage: string;
}) {
  const [showSmallModal, setShowSmallModal] = useState(false);
  const { mutate: deleteComment } = useDeleteComment();

  const onDeleteComment = () => {
    if (window.confirm('댓글을 삭제하시겠습니까?')) {
      deleteComment({ boardId, replyId: id });
    }
  };

  // TODO: 댓글 시간 연결!

  return (
    <div key={id}>
      <FlexBox align="start" className="gap-3 group">
        <Avatar size="base" image={userImage} name={userName} />
        <FlexBox direction="column" align="start" className="gap-1">
          <div>
            <div className="inline-block mr-1 body2 text-grey-500">
              {userName}
            </div>
            <div className="inline body4 text-grey-500">{content}</div>
          </div>
          <FlexBox className="gap-1" align="start">
            <div className="caption2 text-grey-500">1일전</div>
            <button type="button" onClick={() => setShowSmallModal(true)}>
              <DotsIcon className="hidden w-4 h-4 group-hover:block" />
            </button>
            <Modal
              open={showSmallModal}
              onClose={() => setShowSmallModal(false)}
            >
              <FlexBox
                as="ul"
                direction="column"
                className={`gap-2 p-4 w-[324px] bg-white shadow-dropdown rounded-[10px] `}
              >
                <li className="w-full rounded-[10px] hover:bg-primary-50 active:bg-primary-100">
                  {userName ? (
                    isUser && (
                      <button
                        className="w-full p-3 body1"
                        type="button"
                        onClick={onDeleteComment}
                      >
                        삭제하기
                      </button>
                    )
                  ) : (
                    <button
                      type="button"
                      className="w-full p-3 cursor-not-allowed body1"
                      disabled
                    >
                      이미 삭제된 댓글입니다.
                    </button>
                  )}
                </li>
                <li className="w-full rounded-[10px] hover:bg-primary-50 active:bg-primary-100">
                  <button
                    className="w-full p-3 body1"
                    type="button"
                    onClick={() => setShowSmallModal(false)}
                  >
                    취소
                  </button>
                </li>
              </FlexBox>
            </Modal>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </div>
  );
}
