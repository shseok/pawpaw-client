import { useQuery } from '@tanstack/react-query';
import { getChatroomUserList } from '@/service/chatRoom';

export default function useGetChatRoomUserList(chatRoomId: string) {
  const { data, isLoading } = useQuery({
    queryKey: ['chatRoomUserList', chatRoomId],
    queryFn: () => getChatroomUserList(chatRoomId),
    refetchOnWindowFocus: false,
    enabled: !!chatRoomId,
  });
  return { data, isLoading };
}
