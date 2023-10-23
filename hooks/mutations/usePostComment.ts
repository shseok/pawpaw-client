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
  });
  return { mutate, isLoading };
}
