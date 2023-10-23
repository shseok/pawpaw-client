import { useMutation, useQueryClient } from '@tanstack/react-query';
import { withdrawSchedule } from '@/service/chatRoom';
import Toast from '@/utils/notification';
import { ScheduleEventArgType } from '@/types/types';
import { queryKeys } from '@/constant/query-keys';

export default function useWithdrawSchedule() {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: ({ roomId, scheduleId }: ScheduleEventArgType) =>
      withdrawSchedule(roomId, scheduleId),
    onSuccess: () => {
      Toast.success('일정을 취소했어요. 🐾');
      return queryClient.invalidateQueries([queryKeys.SCHEDULE_LIST]);
    },
  });
  return { mutate };
}
