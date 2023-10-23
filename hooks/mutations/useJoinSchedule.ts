import { useMutation, useQueryClient } from '@tanstack/react-query';
import { joinSchedule } from '@/service/chatRoom';
import Toast from '@/utils/notification';
import { ScheduleEventArgType } from '@/types/types';
import { queryKeys } from '@/constant/query-keys';

export default function useJoinSchedule() {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: ({ roomId, scheduleId }: ScheduleEventArgType) =>
      joinSchedule(roomId, scheduleId),
    onSuccess: () => {
      Toast.success('스케줄에 참여하였습니다.🐾');
    },
    onSettled: () => queryClient.invalidateQueries([queryKeys.SCHEDULE_LIST]),
  });
  return { mutate, isLoading };
}
