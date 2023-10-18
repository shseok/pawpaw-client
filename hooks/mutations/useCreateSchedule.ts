import { useQueryClient, useMutation } from '@tanstack/react-query';
import { postSchedule } from '@/service/chatRoom';
import Toast from '@/utils/notification';
import { Schedule } from '@/types/types';
import { queryKeys } from '@/constant/query-keys';

export default function useCreateSchedule(closeModal: () => void) {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: ({
      roomId,
      scheduleInfo,
    }: {
      roomId: string;
      scheduleInfo: Omit<Schedule, 'id'>;
    }) => postSchedule(roomId, scheduleInfo),
    onSuccess: () => {
      Toast.success('새로운 스케줄을 생성하였습니다.');
      closeModal();
      return queryClient.invalidateQueries([queryKeys.SCHEDULE_LIST]);
    },
    onError: () => {
      Toast.error(
        '스케줄을 생성하지 못하였습니다. 잠시후 다시 시도해주세요.🥲',
      );
    },
  });
  return { mutate, isLoading };
}
