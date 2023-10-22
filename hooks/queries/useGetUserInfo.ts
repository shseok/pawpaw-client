import { useQuery } from '@tanstack/react-query';
import getUserInfo from '@/service/user';
import { queryKeys } from '@/constant/query-keys';

export default function useGetUserInfo() {
  const { data } = useQuery({
    queryKey: [queryKeys.USER_INFO],
    queryFn: getUserInfo,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    cacheTime: Infinity,
  });
  return { data };
}
