import { usePathname } from 'next/navigation';
import useGetChatHistory from '@/hooks/queries/useGetChatHistory';
import { MessageType } from '@/types/types';
import useGetUserInfo from '@/hooks/queries/useGetUserInfo';
// import CaretDownIcon from '@/public/CaretDown.svg';
import { useRef } from 'react';
import useChatScroll from '@/hooks/common/useChatScroll';
import Message from './Message';

export default function ChatRoomBox({
  currentMessages,
}: {
  currentMessages: MessageType[];
}) {
  const roomId = usePathname().split('/')[2];
  const {
    data: chatHistory,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useGetChatHistory(roomId);
  const { data: userInfo } = useGetUserInfo();
  const chatRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useChatScroll({
    chatRef,
    bottomRef,
    count: currentMessages.length,
    beforeChatLoadMore: fetchNextPage,
    shouldLoadMore: !isFetchingNextPage && !!hasNextPage,
  });
  console.log('chatHistory', chatHistory);
  return (
    <div className="flex flex-col flex-1 p-4 overflow-y-scroll " ref={chatRef}>
      {chatHistory?.pages.map((history) =>
        history.content.map((chat) => (
          <Message key={chat.id} {...chat} userId={userInfo!.userId} />
        )),
      )}
      {currentMessages.map((message) => (
        <Message key={message.id} {...message} userId={userInfo!.userId} />
      ))}
      <div ref={bottomRef} />
    </div>
  );
}
