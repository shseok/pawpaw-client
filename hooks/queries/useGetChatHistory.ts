import { useInfiniteQuery } from '@tanstack/react-query';
import { getChatHistory } from '@/service/chatRoom';
import { queryKeys } from '@/constant/query-keys';

export default function useGetChatHistory(roomId: string) {
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: [queryKeys.CHAT_HISTORY_LIST, roomId],
      queryFn: ({ pageParam = 0 }) => getChatHistory(roomId, pageParam),
      enabled: !!roomId,
      refetchOnWindowFocus: false,
      getNextPageParam: (history) => {
        const lowestId = history.content.sort((a, b) => a.id - b.id).at(0)?.id;
        return lowestId;
      },
      select: (chatHistory) => {
        const reversedChatContent = chatHistory.pages
          .slice()
          .reverse()
          .flatMap((chat) => chat.content);
        return {
          pages: reversedChatContent,
          pageParams: chatHistory.pageParams,
        };
      },
    });

  return { data, fetchNextPage, isFetchingNextPage, hasNextPage };
}
