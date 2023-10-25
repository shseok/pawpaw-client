'use client';

import { useState } from 'react';
import usePostComment from '@/hooks/mutations/usePostComment';
import useLikeBoard from '@/hooks/mutations/useLikeBoard';
import useUnlikeBoard from '@/hooks/mutations/useUnlikeBoard';
import CommentLine from '@/public/svgs/commentLine.svg';
import LikeButton from '@/public/svgs/like.svg';
import PaperPlaneIcon from '@/public/svgs/PaperPlaneTilt.svg';
import FlexBox from '../../FlexBox';

export function BoardCardCommentWrapper({
  children,
  isModal = false,
  boardId,
  commentsCount,
  likedCount,
  isLiked,
}: {
  children: React.ReactNode;
  isModal?: boolean;
  boardId: number;
  commentsCount: number;
  likedCount: number;
  isLiked: boolean;
}) {
  const [commentText, setCommentText] = useState('');
  const { mutate: commentMutate, isLoading } = usePostComment();
  const { mutate: likeMutate } = useLikeBoard();
  const { mutate: unlikeMutate } = useUnlikeBoard();

  const postNewComment = () => {
    commentMutate({
      boardId,
      parentId: 0,
      content: commentText,
    });
    setCommentText('');
  };
  const updateLike = () => {
    if (isLiked) {
      unlikeMutate(boardId);
    } else {
      likeMutate(boardId);
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
            align="start"
            className="gap-[5px] overflow-scroll h-full"
          >
            {children}
          </FlexBox>
        ) : (
          <FlexBox
            direction="row"
            justify="start"
            className="w-full gap-[19px] pl-[15px]"
          >
            <CommentLine className="w-[1px] h-[53px]" />
            {children}
          </FlexBox>
        )}
      </FlexBox>
      <FlexBox className="gap-[9px] w-full">
        <button type="button" onClick={updateLike}>
          <LikeButton
            className={`w-6 h-6  ${isLiked ? 'fill-red' : 'fill-grey-500'}`}
          />
        </button>
        <input
          type="text"
          placeholder="댓글로 이웃과 소통해보세요!"
          className="border rounded-[10px] py-[16px] px-[20px] w-full body4 text-grey-400"
          value={commentText}
          onChange={(event) => setCommentText(event.target.value)}
        />
        <button
          type="button"
          onClick={postNewComment}
          disabled={commentText.length === 0}
          className={`${
            commentText.length === 0 ? 'cursor-not-allowed' : null
          }`}
        >
          <PaperPlaneIcon
            className={`w-8 h-8 ${
              commentText.length === 0 ? 'fill-grey-300' : 'fill-primary-300'
            } ${isLoading ? 'animate-bounce' : null}`}
          />
        </button>
      </FlexBox>
    </FlexBox>
  );
}

export function MyPageBoardCardCommentWrapper({
  commentsCount,
  likedCount,
}: {
  commentsCount: number;
  likedCount: number;
}) {
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
      </FlexBox>
    </FlexBox>
  );
}
