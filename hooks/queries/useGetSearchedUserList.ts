import { getSearchedUserList } from '@/service/chatRoom';
import { useQuery } from '@tanstack/react-query';

export default function useGetSearchedUserList(
  roomId: string,
  nickname: string,
) {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['searchedUserList', nickname],
    queryFn: () => getSearchedUserList(roomId, nickname),
    staleTime: 60 * 1000,
    enabled: false,
  });
  return { data, isLoading, refetch };
}

// enabled 를 false로 설정한 이유는 검색유저리스트는 아이콘을 클릭하거나 엔터를 눌렀을때만 fetching 하도록 제한해야하므로 false로 설정하였습니다.
// enabled 를 false로 설정하게된다면 첫 렌더링시 자동적으로 데이터를 fetching 하지 않게 됩니다.
