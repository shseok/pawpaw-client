import { useQuery } from '@tanstack/react-query';
import { getRecommendedChatList } from '@/service/community';
import { queryKeys } from '@/constant/query-keys';

export default function useGetRecommendChatList() {
  const { data, isLoading } = useQuery({
    queryKey: [queryKeys.RECOMMEND_CHAT_LIST],
    queryFn: getRecommendedChatList,
    refetchOnWindowFocus: false,
  });
  return { data, isLoading };
}
