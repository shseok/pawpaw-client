import { useQuery } from '@tanstack/react-query';
import { getRecommendedChatList } from '@/service/community';
import { queryKeys } from '@/constant/query-keys';

export default function useGetRecommendChatList() {
  const { data, isLoading } = useQuery({
    queryKey: [queryKeys.RECOMMEND_CHAT_LIST],
    queryFn: getRecommendedChatList,
    staleTime: 1000 * 60,
    select(list) {
      return list.slice(0, 10);
    },
  });
  return { data, isLoading };
}
