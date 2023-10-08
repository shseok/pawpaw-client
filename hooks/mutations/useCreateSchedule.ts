import { QueryClient, useMutation } from '@tanstack/react-query';
import { postSchedule } from '@/service/chatRoom';
import Toast from '@/utils/notification';

interface ScheduleInfo {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
}
interface Schedule {
  roomId: string;
  scheduleInfo: ScheduleInfo;
}
export default function useCreateSchedule() {
  const queryClient = new QueryClient();
  const { mutate } = useMutation({
    mutationFn: ({ roomId, scheduleInfo }: Schedule) =>
      postSchedule(roomId, scheduleInfo),
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
