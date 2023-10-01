import { useQuery } from '@tanstack/react-query';
import { getRecommendedChatList } from '@/service/community';

export default function useGetRecommendChatList() {
  const { data, isLoading } = useQuery({
    queryKey: ['recommendChatlist'],
    queryFn: getRecommendedChatList,
    refetchOnWindowFocus: false,
  });
  return { data, isLoading };
}
