import { useInfiniteQuery } from '@tanstack/react-query';
import { getChatHistory } from '@/service/chatRoom';

export default function useGetChatHistory(roomId: string) {
  const { data, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ['chatHistory', roomId],
      queryFn: ({ pageParam = 0 }) => getChatHistory(roomId, pageParam),
      refetchOnWindowFocus: false,
      getNextPageParam: (history) => {
        const lowestId = history.content.sort((a, b) => a.id - b.id).at(0)?.id;
        return lowestId;
      },
      select: (chatHistory) => {
        const reversedChatContent = chatHistory.pages
          .reverse()
          .flatMap((chat) => chat.content);
        return {
          pages: reversedChatContent,
          pageParams: chatHistory.pageParams,
        };
      },
    });

  return { data, isFetchingNextPage, hasNextPage, fetchNextPage };
}
