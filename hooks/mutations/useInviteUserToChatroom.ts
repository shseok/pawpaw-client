import { useMutation, useQueryClient } from '@tanstack/react-query';
import { inviteUserToChatRoom } from '@/service/chatRoom';
import Toast from '@/utils/notification';

export default function useInviteUserToChatroom(successCb: () => void) {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: ({
      roomId,
      userId,
    }: {
      roomId: string;
      userId: { userId: string };
    }) => inviteUserToChatRoom(roomId, userId),
    onSuccess: () => {
      successCb();
      return queryClient.invalidateQueries({
        queryKey: ['chatRoomUserList'],
        refetchType: 'all',
      });
    },
    onError: () => Toast.error('잠시후 다시 시도해주세요.'),
  });
  return { mutate };
}
