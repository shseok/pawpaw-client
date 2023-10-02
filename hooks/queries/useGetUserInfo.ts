import { useQuery } from '@tanstack/react-query';
import getUserInfo from '@/service/user';

export default function useGetUserInfo() {
  const { data } = useQuery(['userInfo'], getUserInfo);
  return { data };
}
