import { QueryClient, useMutation } from '@tanstack/react-query';
import { postSchedule } from '@/service/chatRoom';
import Toast from '@/utils/notification';
import { Schedule } from '@/types/types';

export default function useCreateSchedule() {
  const queryClient = new QueryClient();
  const { mutate } = useMutation({
    mutationFn: ({
      roomId,
      scheduleInfo,
    }: {
      roomId: string;
      scheduleInfo: Omit<Schedule, 'id'>;
    }) => postSchedule(roomId, scheduleInfo),
    onSuccess: () => {
      queryClient.invalidateQueries(['scheduleList']);
      Toast.success('새로운 스케줄을 생성하였습니다.');
    },
    onError: () => {
      Toast.error(
        '스케줄을 생성하지 못하였습니다. 잠시후 다시 시도해주세요.🥲',
      );
      console.error('스케줄 생성 실패');
    },
  });
  return { mutate };
}
