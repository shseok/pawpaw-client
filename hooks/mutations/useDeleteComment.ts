import { deleteComment } from '@/service/board';
import Toast from '@/utils/notification';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useDeleteComment() {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: ({ boardId, replyId }: { boardId: number; replyId: number }) =>
      deleteComment(boardId, replyId),
    onSuccess: () => {
      Toast.success('댓글이 성공적으로 삭제 되었습니다.');
      queryClient.invalidateQueries(['boardList']);
    },
    onError: () => {
      Toast.error('댓글을 삭제하지 못했습니다. 잠시후 다시 시도해주세요.🥲');
    },
  });
  return { mutate, isLoading };
}
