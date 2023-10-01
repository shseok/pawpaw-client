import { useQuery } from '@tanstack/react-query';
import { getEnteredChatList } from '@/service/community';

export default function useGetEnteredChatList() {
  const { data, isLoading } = useQuery({
    queryKey: ['enteredChatList'],
    queryFn: getEnteredChatList,
    refetchOnWindowFocus: false,
  });
  return { data, isLoading };
}
