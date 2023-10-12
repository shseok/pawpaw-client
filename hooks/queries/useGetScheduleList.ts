import { useQuery } from '@tanstack/react-query';
import { getScheduleList } from '@/service/chatRoom';

export default function useGetScheduleList(roomId: string) {
  const { data, isLoading } = useQuery({
    queryKey: ['scheduleList', roomId],
    queryFn: () => getScheduleList(roomId),
    staleTime: 60 * 1000 * 5,
  });
  return { data, isLoading };
}
