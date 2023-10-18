import { useQueryClient, useMutation } from '@tanstack/react-query';
import Toast from '@/utils/notification';
import { BoardList } from '@/types/types';
import { updateBoardLike } from '@/service/board';

export default function useLikeBoard() {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: updateBoardLike,
    onMutate: async (boardId) => {
      await queryClient.cancelQueries({ queryKey: ['boardList'] });
      const previousBoards = queryClient.getQueryData<BoardList>(['boardList']);

      // 낙관적 업데이트 시작
      if (previousBoards) {
        queryClient.setQueryData<BoardList>(['boardList'], (oldData) => {
          if (oldData) {
            const updatedData = { ...oldData };
            const updatedBoard = updatedData.content?.find(
              (board) => board.id === boardId,
            );
            if (updatedBoard) {
              updatedBoard.boardLiked = true;
            }
            return updatedData;
          }
          return oldData;
        });
      }
      return { previousBoards };
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['boardList']);
    },
    onError: (_err, _, context) => {
      // 캐시를 저장된 값으로 롤백
      queryClient.setQueryData(['boardList'], context?.previousBoards);
      Toast.error(
        '좋아요를 누르는데 실패했습니다. 잠시후 다시 시도해주세요.🥲',
      );
    },
  });
  // const { mutate, isLoading } = useMutation({
  //   mutationFn: updateBoardLike,
  //   onMutate: async (liked) => {
  //     // Cancel any outgoing refetches
  //     // (so they don't overwrite our optimistic update)
  //     await queryClient.cancelQueries({ queryKey: ['boardList'] });

  //     // Snapshot the previous value
  //     const previousBoards = queryClient.getQueryData<BoardList>(['boardList']);

  //     // Optimistically update to the new value
  //     // queryClient.setQueryData(['boardList'], (old) => [...old, newTodo])
  //     if (previousBoards) {
  //       queryClient.setQueryData(['boardList'], liked);
  //     }

  //     // Return a context object with the snapshotted value
  //     return { previousBoards };
  //   },
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(['boardList']);
  //   },
  //   onError: (_err, _, context) => {
  //     // 캐시를 저장된 값으로 롤백
  //     queryClient.setQueryData(['boardList'], context?.previousBoards);
  //     Toast.error(
  //       '좋아요를 누르는데 실패했습니다. 잠시후 다시 시도해주세요.🥲',
  //     );
  //   },
  // });
  return { mutate, isLoading };
}
