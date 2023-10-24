import { queryKeys } from '@/constant/query-keys';
import { getBoard } from '@/service/board';
import { useQuery } from '@tanstack/react-query';

export default function useGetBoard(boardId: number) {
  const { data, isLoading } = useQuery({
    queryKey: [queryKeys.BOARD, boardId],
    queryFn: () => getBoard(boardId),
  });
  return { data, isLoading };
}
