/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import FlexBox from '../../FlexBox';
import {
  BoardCardCommentWrapper,
  MyPageBoardCardCommentWrapper,
} from './CommentWrapper';
import Comments from './Comments';
import Content from './Content';
import Header from './Header';
import Images from './Images';

export default function BoardCardWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FlexBox
      direction="column"
      justify="between"
      className="max-h-[500px] p-9 rounded-[10px] border-[1px] border-grey-200 gap-4"
    >
      {children}
    </FlexBox>
  );
}

export const BoardCard = Object.assign(BoardCardWrapper, {
  Comments,
  BoardCardCommentWrapper,
  MyPageBoardCardCommentWrapper,
  Content,
  Header,
  Images,
});
