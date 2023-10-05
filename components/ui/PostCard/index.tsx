/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import FlexBox from '../FlexBox';
import CommentWrapper from './CommentWrapper';
import Comments from './Comments';

import Content from './Content';
import Header from './Header';
import Images from './Images';
import ModalComments from './ModalComments';
import ModalContent from './ModalContent';

export default function PostCardWrapper({
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

export const PostCard = Object.assign(PostCardWrapper, {
  Comments,
  CommentWrapper,
  Content,
  Header,
  Images,
  ModalComments,
  ModalContent,
});
