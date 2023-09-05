/* eslint-disable react/no-array-index-key */
import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import { Comment, Post } from '@/types/types';
import FlexBox from '../../../FlexBox';
import Modal from '../../../Modal/Modal';
import ModalHeader from './ModalHeader';
import ModalContent from './ModalContent';
import ModalCommentWrapper from './ModalCommentWrapper';
import ModalComments from './ModalComments';

// 드롭다운 메뉴
function BlockOption() {
  return <Dropdown.Item>차단</Dropdown.Item>;
}
function ReportOption() {
  return <Dropdown.Item>신고</Dropdown.Item>;
}
export default function PostModal({
  showModal,
  setShowModal,
  post,
  comment,
}: {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  post: Post | null;
  comment: Comment[] | undefined;
}) {
  const filteredCommentsCount = comment ? comment.length : 0;
  const OPTION_LIST = [BlockOption, ReportOption];

  return (
    <Modal showModal={showModal} setShowModal={setShowModal} opacity>
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
          <Dropdown>
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
              <Dropdown.Menu width="w-[132px]">
                {OPTION_LIST.map((option, index) => (
                  <Fragment key={index}>{option()}</Fragment>
                ))}
              </Dropdown.Menu>
            </FlexBox>
          </Dropdown>
        ) : (
          <div>내용이 없습니다.</div>
        )}
      </FlexBox>
    </Modal>
  );
}
