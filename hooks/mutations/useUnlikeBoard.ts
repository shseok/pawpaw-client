import { useQueryClient, useMutation } from '@tanstack/react-query';
import { BoardList } from '@/types/types';
import { deleteBoardLike } from '@/service/board';
import { queryKeys } from '@/constant/query-keys';

export default function useUnlikeBoard() {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: deleteBoardLike,
    onMutate: async (boardId) => {
      await queryClient.cancelQueries({ queryKey: [queryKeys.BOARD_LIST] });
      const previousBoards = queryClient.getQueryData<BoardList>([
        queryKeys.BOARD_LIST,
      ]);

      // 낙관적 업데이트 시작
      if (previousBoards) {
        queryClient.setQueryData<BoardList>(
          [queryKeys.BOARD_LIST],
          (oldData) => {
            if (oldData) {
              const updatedBoard = oldData.content?.find(
                (board) => board.id === boardId,
              );
              if (updatedBoard) {
                updatedBoard.boardLiked = false;
              }
            }
            return oldData;
          },
        );
      }
      return { previousBoards };
    },
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.BOARD_LIST]);
    },
    onError: (_err, _, context) => {
      // 캐시를 저장된 값으로 롤백
      queryClient.setQueryData([queryKeys.BOARD_LIST], context?.previousBoards);
    },
  });
  return { mutate, isLoading };
}
