import { useQuery } from '@tanstack/react-query';
import { getChatroomUserList } from '@/service/chatRoom';

export default function useGetChatRoomUserList(chatRoomId: string) {
  const { data, isLoading } = useQuery({
    queryKey: ['chatRoomUserList'],
    queryFn: () => getChatroomUserList(chatRoomId),
    staleTime: 60 * 5000,
    enabled: !!chatRoomId,
  });
  return { data, isLoading };
}
