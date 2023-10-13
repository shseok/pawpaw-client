import FlexBox from '@/components/ui/FlexBox';
import { usePathname } from 'next/navigation';
import useGetChatHistory from '@/hooks/queries/useGetChatHistory';
import { MessageType } from '@/types/types';
import useGetUserInfo from '@/hooks/queries/useGetUserInfo';
import Message from './Message';

export default function ChatRoomBox({
  currentMessages,
}: {
  currentMessages: MessageType[];
}) {
  const roomId = usePathname().split('/')[2];
  const { data: chatHistory, Observer } = useGetChatHistory(roomId);
  const { data: userInfo } = useGetUserInfo();
  return (
    <>
      <Observer>
        <div>이전 채팅 불러오는중</div>
      </Observer>
      <FlexBox
        direction="column"
        justify="start"
        className="flex-1 w-full px-4 pt-10 overflow-y-scroll tablet:px-10"
      >
        {chatHistory?.pages.map((history) =>
          history.content.map((chat) => (
            <Message key={chat.id} {...chat} userId={userInfo?.userId} />
          )),
        )}
        {currentMessages.map((message) => (
          <Message key={message.id} {...message} userId={userInfo?.userId} />
        ))}
      </FlexBox>
    </>
  );
}
