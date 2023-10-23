import { queryKeys } from '@/constant/query-keys';
import { deleteBoard } from '@/service/board';
import Toast from '@/utils/notification';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useDeleteBoard(boardId: number) {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: () => deleteBoard(boardId),
    onSuccess: () => {
      Toast.success('게시글이 성공적으로 삭제 되었습니다.');
      queryClient.invalidateQueries([queryKeys.BOARD_LIST]);
    },
  });
  return { mutate, isLoading };
}
