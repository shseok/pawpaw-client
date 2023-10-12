import FlexBox from '@/components/ui/FlexBox';
import { usePathname } from 'next/navigation';
import useGetChatHistory from '@/hooks/queries/useGetChatHistory';
import Message from './Message';

export default function ChatRoomBox() {
  const roomId = usePathname().split('/')[2];
  const { data: chatHistory } = useGetChatHistory(roomId);

  return (
    <FlexBox
      direction="column"
      justify="start"
      className="flex-1 w-full px-4 pt-10 overflow-auto scrollbar-hide tablet:px-10"
    >
      {chatHistory?.pages.map((history) =>
        history.content.map((chat) => <Message key={chat.id} {...chat} />),
      )}
    </FlexBox>
  );
}
