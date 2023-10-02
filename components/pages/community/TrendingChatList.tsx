'use client';

import FlexBox from '@/components/ui/FlexBox';
import NormalChatCard from '@/components/ui/ChatCard/NormalChatCard';
import useGetTrendingChatList from '@/hooks/queries/useGetTrendingChatList';
import TrendingChatListLoading from '@/components/ui/Loading/TrendingChatListLoading';

export default function TrendingChatList() {
  const { data, Observer } = useGetTrendingChatList();
  return (
    <>
      <FlexBox direction="column" className="gap-3 tablet:gap-5">
        <h1 className="w-full text-xl font-bold">지금 뜨고 있는 채팅방</h1>
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 min-[1921px]:grid-cols-4">
          {data &&
            data.pages.map((page) =>
              page.content.map((chatList) => (
                <NormalChatCard {...chatList} key={chatList.id} />
              )),
            )}
        </div>
      </FlexBox>
      <Observer>
        <TrendingChatListLoading />
      </Observer>
    </>
  );
}
