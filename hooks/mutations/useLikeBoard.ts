import { useQueryClient, useMutation } from '@tanstack/react-query';
import { BoardList } from '@/types/types';
import { updateBoardLike } from '@/service/board';
import { queryKeys } from '@/constant/query-keys';

export default function useLikeBoard() {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: updateBoardLike,
    onMutate: async (boardId) => {
      await queryClient.cancelQueries({ queryKey: [queryKeys.BOARD_LIST] });
      const previousBoards = queryClient.getQueryData<BoardList>([
        queryKeys.BOARD_LIST,
      ]);

      // 낙관적 업데이트
      if (previousBoards) {
        queryClient.setQueryData<BoardList>(
          [queryKeys.BOARD_LIST],
          (oldData) => {
            if (oldData) {
              const updatedBoard = oldData.content?.find(
                (board) => board.id === boardId,
              );
              if (updatedBoard) {
                updatedBoard.boardLiked = true;
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
  });
  return { mutate, isLoading };
}
