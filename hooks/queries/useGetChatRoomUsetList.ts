import { useQuery } from '@tanstack/react-query';
import { getChatroomUserList } from '@/service/chatRoom';

export default function useGetChatRoomUsetList(chatRoomId: string) {
  const { data } = useQuery({
    queryKey: ['chatRoomUserList'],
    queryFn: () => getChatroomUserList(chatRoomId),
    enabled: !!chatRoomId,
  });
  return { data };
}
