import { useQuery } from '@tanstack/react-query';
import { getChatroomUserList } from '@/service/chatRoom';
import { queryKeys } from '@/constant/query-keys';

export default function useGetChatRoomUserList(chatRoomId: string) {
  const { data, isLoading } = useQuery({
    queryKey: [queryKeys.CHATROOM_USER_LIST, chatRoomId],
    queryFn: () => getChatroomUserList(chatRoomId),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    enabled: !!chatRoomId,
  });
  return { data, isLoading };
}
