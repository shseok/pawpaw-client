import { useQueryClient, useMutation } from '@tanstack/react-query';
import Toast from '@/utils/notification';
import { PostCommentType } from '@/types/types';
import { postComment } from '@/service/board';
import { queryKeys } from '@/constant/query-keys';

export default function usePostComment() {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: (postCommentData: PostCommentType) =>
      postComment(postCommentData),
    onSuccess: () => {
      Toast.success('댓글이 성공적으로 업로드 되었습니다.');
      queryClient.invalidateQueries([queryKeys.BOARD_LIST]);
      return queryClient.invalidateQueries([queryKeys.COMMENT_LIST]);
    },
    onError: () => {
      Toast.error('댓글을 업로드하지 못했습니다. 잠시후 다시 시도해주세요.🥲');
    },
  });
  return { mutate, isLoading };
}
