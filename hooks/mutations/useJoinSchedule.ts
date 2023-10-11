import { useMutation, useQueryClient } from '@tanstack/react-query';
import { joinSchedule } from '@/service/chatRoom';
import Toast from '@/utils/notification';
import { ScheduleEventArgType } from '@/types/types';

export default function useJoinSchedule() {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: ({ roomId, scheduleId }: ScheduleEventArgType) =>
      joinSchedule(roomId, scheduleId),
    onSuccess: () => {
      Toast.success('스케줄에 참여하였습니다.🐾');
      return queryClient.invalidateQueries(['scheduleList']);
    },
    onError: () => {
      Toast.error('잠시후 다시 시도해주세요.');
    },
  });
  return { mutate, isLoading };
}
