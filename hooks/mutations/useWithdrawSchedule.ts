import { useMutation, useQueryClient } from '@tanstack/react-query';
import { withdrawSchedule } from '@/service/chatRoom';
import Toast from '@/utils/notification';

export default function useWithdrawSchedule() {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: ({
      roomId,
      scheduleId,
    }: {
      roomId: string;
      scheduleId: number;
    }) => withdrawSchedule(roomId, scheduleId),
    onSuccess: () => {
      Toast.success('일정을 취소했어요. 🐾');
      return queryClient.invalidateQueries(['scheduleList']);
    },
    onError: () => {
      Toast.error('일정취소를 실패했어요. 🥲 잠시후 다시 시도해주세요.');
    },
  });
  return { mutate };
}
