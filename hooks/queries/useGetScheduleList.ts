import { useQuery } from '@tanstack/react-query';
import { getScheduleList } from '@/service/chatRoom';
import { queryKeys } from '@/constant/query-keys';

export default function useGetScheduleList(roomId: string) {
  const { data, isLoading } = useQuery({
    queryKey: [queryKeys.SCHEDULE_LIST, roomId],
    queryFn: () => getScheduleList(roomId),
    staleTime: 60 * 1000 * 5,
  });
  return { data, isLoading };
}
