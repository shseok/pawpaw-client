import { useQuery } from '@tanstack/react-query';
import { getCoverImageList } from '@/service/chatRoom';

interface CoverImage {
  id: number;
  coverUrl: string;
}

export default function useGetCoverImageList() {
  const { data } = useQuery<CoverImage[]>(['coverImage'], getCoverImageList);
  return { data };
}
