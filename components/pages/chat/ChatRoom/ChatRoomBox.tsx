import { usePathname } from 'next/navigation';
import useGetChatHistory from '@/hooks/queries/useGetChatHistory';
import { ChatType } from '@/types/types';
import useGetUserInfo from '@/hooks/queries/useGetUserInfo';
import { useRef } from 'react';
import useChatScroll from '@/hooks/common/useChatScroll';

import makeDateSection from '@/utils/makeDateSection';
import ChatItem from './ChatItem';

export default function ChatRoomBox({
  currentChatList,
}: {
  currentChatList: ChatType[];
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
    count: currentChatList.length,
    beforeChatLoadMore: fetchNextPage,
    shouldLoadMore: !isFetchingNextPage && !!hasNextPage,
  });

  const mergedChatList = [...(chatHistory?.pages ?? []), ...currentChatList];
  const chatListWithDateSection = makeDateSection(
    mergedChatList && mergedChatList,
  );

  return (
    <div className="flex flex-col flex-1 p-4 overflow-y-scroll " ref={chatRef}>
      {Object.entries(chatListWithDateSection).map(([date, chatList]) => (
        <>
          <div className="mb-5 text-center text-grey-500 body4">{date}</div>
          {chatList.map((chat) => (
            <ChatItem key={chat.id} {...chat} userId={userInfo!.userId} />
          ))}
        </>
      ))}
      <div ref={bottomRef} />
    </div>
  );
}
