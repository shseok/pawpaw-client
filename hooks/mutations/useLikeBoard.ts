import { useQueryClient, useMutation } from '@tanstack/react-query';
import Toast from '@/utils/notification';
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
    onError: (_err, _, context) => {
      // 캐시를 저장된 값으로 롤백
      queryClient.setQueryData([queryKeys.BOARD_LIST], context?.previousBoards);
      Toast.error(
        '좋아요를 누르는데 실패했습니다. 잠시후 다시 시도해주세요.🥲',
      );
    },
  });
  return { mutate, isLoading };
}
