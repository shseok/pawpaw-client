import FlexBox from '@/components/ui/FlexBox';
import Header from '../Header';
import Content from '../Content';
import { BoardCardCommentWrapper } from '../CommentWrapper';
import BoardCardModalComments from '../BoardCardModalPackage/ModalComments';

export default function BoardCardIdWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FlexBox direction="column" justify="between" className="w-full gap-4 p-9">
      {children}
    </FlexBox>
  );
}
export const BoardCardId = Object.assign(BoardCardIdWrapper, {
  Header,
  Content,
  BoardCardCommentWrapper,
  BoardCardModalComments,
});
