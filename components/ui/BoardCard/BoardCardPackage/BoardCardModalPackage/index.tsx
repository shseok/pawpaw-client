import FlexBox from '../../../FlexBox';
import { BoardCardCommentWrapper } from '../CommentWrapper';
import Content from '../Content';
import Header from '../Header';
import Images from '../Images';
import ModalComments from './ModalComments';

export default function BoardCardModalWrapper({
  children,
  imgs,
}: {
  children: React.ReactNode;
  imgs: string[];
}) {
  const hasImages = imgs.length !== 0;
  return (
    <FlexBox
      direction="column"
      className={` ${
        hasImages ? 'w-[1028px]' : 'w-[434px]'
      } h-[720px] p-9 gap-4 bg-white opacity-100 border-[1px] border-grey-200 rounded-[10px]`}
    >
      {children}
    </FlexBox>
  );
}

export const BoardCardModal = Object.assign(BoardCardModalWrapper, {
  BoardCardCommentWrapper,
  Content,
  Header,
  Images,
  ModalComments,
});
