import { queryKeys } from '@/constant/query-keys';
import { postImageBoard } from '@/service/board';
import Toast from '@/utils/notification';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function usePostImageBoard(
  boardId: number,
  postImageUrl: string[],
) {
  const queryClient = useQueryClient();
  const { mutate, isLoading, isSuccess } = useMutation({
    mutationFn: () => postImageBoard(boardId, { files: postImageUrl }),
    onSuccess: () => {
      Toast.success('게시글이 성공적으로 업로드 되었습니다.');
      queryClient.invalidateQueries([queryKeys.BOARD_LIST]);
    },
  });
  return { mutate, isLoading, isSuccess };
}
