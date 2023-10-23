import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteSchedule } from '@/service/chatRoom';
import Toast from '@/utils/notification';
import { ScheduleEventArgType } from '@/types/types';
import { queryKeys } from '@/constant/query-keys';

export default function useDeleteSchedule() {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: ({ roomId, scheduleId }: ScheduleEventArgType) =>
      deleteSchedule(roomId, scheduleId),
    onSuccess: () => {
      Toast.success('스케줄을 삭제했어요. 🐹');
      return queryClient.invalidateQueries([queryKeys.SCHEDULE_LIST]);
    },
  });
  return { mutate };
}
