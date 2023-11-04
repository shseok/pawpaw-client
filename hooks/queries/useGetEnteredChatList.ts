import { useQuery } from '@tanstack/react-query';
import { getEnteredChatList } from '@/service/community';
import { queryKeys } from '@/constant/query-keys';

export default function useGetEnteredChatList() {
  const { data, isLoading } = useQuery({
    queryKey: [queryKeys.ENTERED_CHAT_LIST],
    queryFn: getEnteredChatList,
    staleTime: Infinity,
    cacheTime: Infinity,
  });
  return { data, isLoading };
}
// 참여하고 있는 채팅방 리스트는 특정조건에서만 데이터를 최신화해주면 되기 때문에 staleTime 과 cacheTime 을 무한대로 설정해주었다.
// 최신회 되는 조건은 새로운 방에 입장했을때, 채팅방을 나갔을때 가 있으며 해당 조건들은 queryClient 의 invalieQueries 를 사용하여 최신화를 해준다.
// 위와 같이 하게되면 서버로 불필요한 API 요청을 줄일수 있다.
