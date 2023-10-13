import { useQuery } from '@tanstack/react-query';
import getUserInfo from '@/service/user';
import { UserInfo } from '@/types/types';

export default function useGetUserInfo() {
  const { data } = useQuery<UserInfo>({
    queryKey: ['userInfo'],
    queryFn: getUserInfo,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    cacheTime: Infinity,
  });
  return { data };
}
