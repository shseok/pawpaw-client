'use client';

import FlexBox from '@/components/ui/FlexBox';
import SimpleChatCard from '@/components/ui/ChatCard/SimpleChatCard';
import useGetTrendingChatList from '@/hooks/queries/useGetTrendingChatList';
import SimpleChatListLoading from '@/components/ui/Loading/SimpleChatListLoading';

export default function SimpleChatCardList() {
  const { data, isLoading } = useGetTrendingChatList({ size: 9 });
  return (
    <FlexBox
      direction="column"
      justify="start"
      className="w-full gap-3 min-w-max"
    >
      <FlexBox justify="between" className="w-full">
        <h3 className="header3">지금 뜨고있는 채팅방 🔥</h3>
      </FlexBox>
      <ul className="flex flex-col gap-2 p-2 overflow-y-scroll h-72 2xl:h-96 scrollbar-hide">
        {isLoading ? (
          <SimpleChatListLoading />
        ) : (
          data?.pages.map((page) =>
            page.content.map((list) => (
              <li key={list.id}>
                <SimpleChatCard {...list} />
              </li>
            )),
          )
        )}
      </ul>
    </FlexBox>
  );
}
