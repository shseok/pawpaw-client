import Image from 'next/image';
import { useState } from 'react';
import { postComment } from '@/service/board';
import Toast from '@/utils/notification';
import FlexBox from '../../FlexBox';
import Button from '../../Button';

export function BoardCardCommentWrapper({
  children,
  isModal = false,
  boardId,
  commentsCount,
  likedCount,
}: {
  children: React.ReactNode;
  isModal?: boolean;
  boardId: number;
  commentsCount: number;
  likedCount: number;
}) {
  const [commentText, setCommentText] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  // 데이터 전송을 위한 함수
  const onUploadComment = async () => {
    if (!commentText) {
      return;
    }
    setIsUploading(true);
    try {
      const response = await postComment({
        boardId,
        parentId: 1,
        content: commentText,
      });
      if (response.content) {
        Toast.success('댓글이 성공적으로 업로드되었습니다.');
        setCommentText('');
      } else {
        Toast.error('업로드에 실패했습니다. 잠시 후 다시 시도해주세요.');
      }
    } catch (error) {
      Toast.error('오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setIsUploading(false);
    }
  };
  return (
    <FlexBox
      direction="column"
      align="stretch"
      justify="between"
      className="w-full h-full"
    >
      <FlexBox direction="column" align="start" className="w-full gap-3">
        <FlexBox className="gap-5">
          <FlexBox className="gap-2 body3 text-grey-500">
            <div>댓글</div>
            <div>{commentsCount}</div>
          </FlexBox>
          <FlexBox className="gap-2 body3 text-grey-500">
            <div>좋아요</div>
            <div>{likedCount}</div>
          </FlexBox>
        </FlexBox>
        {isModal ? (
          <FlexBox
            direction="column"
            justify="start"
            className="gap-[5px] overflow-scroll h-full"
          >
            {children}
          </FlexBox>
        ) : (
          <FlexBox direction="row" className="gap-[19px] pl-[15px]">
            <Image
              src="/Feed/desktop/commentLine.svg"
              alt="댓글선"
              width={1}
              height={53}
            />
            {children}
          </FlexBox>
        )}
      </FlexBox>
      <FlexBox className="gap-[9px] w-full">
        <Image
          src="/Feed/desktop/like.svg"
          alt="좋아요"
          width={24}
          height={24}
        />
        <input
          type="text"
          placeholder="댓글로 이웃과 소통해보세요!"
          className="border rounded-[10px] py-[16px] px-[20px] w-full body4 text-grey-400"
          value={commentText}
          onChange={(event) => setCommentText(event.target.value)}
        />
        <Button onClickAction={() => onUploadComment()} disabled={isUploading}>
          등록
        </Button>
      </FlexBox>
    </FlexBox>
  );
}

export function MyPageBoardCardCommentWrapper({
  onClickModal,
  commentsCount,
  likedCount,
}: {
  onClickModal: () => void;
  commentsCount: number;
  likedCount: number;
}) {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div onClick={onClickModal}>
      <FlexBox
        direction="column"
        align="stretch"
        justify="between"
        className="w-full h-full"
      >
        <FlexBox direction="column" align="start" className="w-full gap-3">
          <FlexBox className="gap-5">
            <FlexBox className="gap-2 body3 text-grey-500">
              <div>댓글</div>
              <div>{commentsCount}</div>
            </FlexBox>
            <FlexBox className="gap-2 body3 text-grey-500">
              <div>좋아요</div>
              <div>{likedCount}</div>
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </div>
  );
}
