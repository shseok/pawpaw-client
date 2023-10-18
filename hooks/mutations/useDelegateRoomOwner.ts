import { useMutation, useQueryClient } from '@tanstack/react-query';
import { delegateRoomOwner } from '@/service/chatRoom';
import Toast from '@/utils/notification';

interface MutateProps {
  user: string;
  modalClose: () => void;
}

export default function useDelegateRoomOwner({
  user,
  modalClose,
}: MutateProps) {
  const queryClient = useQueryClient();
  const { mutate: delegateOwnerMutate } = useMutation({
    mutationFn: ({ roomId, userId }: { roomId: string; userId: string }) =>
      delegateRoomOwner(roomId, userId),
    onSuccess: () => {
      Toast.success(`${user}님에게 방장을 넘겨주었어요.🐶`);
      modalClose();
      queryClient.invalidateQueries(['chatRoomUserList']);
    },
    onError: (error: Error) => {
      Toast.error(error.message);
      modalClose();
    },
  });

  return { delegateOwnerMutate };
}
