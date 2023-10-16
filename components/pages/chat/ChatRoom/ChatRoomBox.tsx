import { usePathname } from 'next/navigation';
import useGetChatHistory from '@/hooks/queries/useGetChatHistory';
import { MessageType } from '@/types/types';
import useGetUserInfo from '@/hooks/queries/useGetUserInfo';
import { useRef } from 'react';
import useChatScroll from '@/hooks/common/useChatScroll';

import makeDateSection from '@/utils/makeDateSection';
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

  const messageList = [...(chatHistory?.pages ?? []), ...currentMessages];
  const messageListWithDateSection = makeDateSection(
    messageList && messageList,
  );

  return (
    <div className="flex flex-col flex-1 p-4 overflow-y-scroll " ref={chatRef}>
      {Object.entries(messageListWithDateSection).map(([date, list]) => (
        <>
          <div className="mb-5 text-center text-grey-500 body4">{date}</div>
          {list.map((el) => (
            <Message key={el.id} {...el} userId={userInfo!.userId} />
          ))}
        </>
      ))}
      <div ref={bottomRef} />
    </div>
  );
}
