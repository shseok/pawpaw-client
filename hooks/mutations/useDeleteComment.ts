import { queryKeys } from '@/constant/query-keys';
import { deleteComment } from '@/service/board';
import Toast from '@/utils/notification';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useDeleteComment() {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: ({ boardId, replyId }: { boardId: number; replyId: number }) =>
      deleteComment(boardId, replyId),
    onSuccess: () => {
      Toast.success('댓글이 성공적으로 삭제 되었습니다.');
      return queryClient.invalidateQueries([queryKeys.BOARD]);
    },
    onError: (error: Error) => {
      Toast.error(error.message);
    },
  });
  return { mutate };
}
