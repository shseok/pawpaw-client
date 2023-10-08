import { useQuery } from '@tanstack/react-query';
import { getScheduleList } from '@/service/chatRoom';

export default function useGetScheduleList(roomId: string) {
  const { data, isLoading } = useQuery({
    queryKey: ['scheduleList'],
    queryFn: () => getScheduleList(roomId),
    staleTime: 30000,
  });
  return { data, isLoading };
}
