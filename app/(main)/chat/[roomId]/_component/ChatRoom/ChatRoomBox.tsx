import { usePathname } from 'next/navigation';
import useGetChatHistory from '@/hooks/queries/useGetChatHistory';
import { ChatType } from '@/types/types';
import useGetUserInfo from '@/hooks/queries/useGetUserInfo';
import { Fragment, useRef } from 'react';

import makeDateSection from '@/utils/makeDateSection';

import useChatScroll from '@/hooks/common/useChatScroll';
import ChatItem from './ChatItem';

export default function ChatRoomBox({
  currentChatList,
}: {
  currentChatList: ChatType[];
}) {
  const roomId = usePathname().split('/')[2];
  const {
    data: chatHistory,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetChatHistory(roomId);
  const { data: userInfo } = useGetUserInfo();
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const chatListRef = useRef<HTMLDivElement>(null);
  useChatScroll({
    chatContainerRef,
    bottomRef,
    beforeChatLoadMore: fetchNextPage,
    chatListRef,
    shouldLoadMore: !isFetchingNextPage && !!hasNextPage,
  });

  const mergedChatList = [...(chatHistory?.pages ?? []), ...currentChatList];
  const chatListWithDateSection = makeDateSection(
    mergedChatList && mergedChatList,
  );
  return (
    <div
      className="flex flex-col flex-1 p-4 overflow-y-scroll "
      ref={chatContainerRef}
    >
      <div className="flex flex-col" ref={chatListRef}>
        {Object.entries(chatListWithDateSection).map(
          ([date, chatList], index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Fragment key={`date-${index}`}>
              <div className="mb-5 text-center text-grey-500 body4">{date}</div>
              {chatList.map((chat) => (
                <ChatItem key={chat.id} {...chat} userId={userInfo!.userId} />
              ))}
            </Fragment>
          ),
        )}
      </div>
      <div ref={bottomRef} />
    </div>
  );
}
