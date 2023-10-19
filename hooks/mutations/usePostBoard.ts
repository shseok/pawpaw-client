import { postBoard } from '@/service/board';
import Toast from '@/utils/notification';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function usePostBoard(postText: string) {
  const queryClient = useQueryClient();
  const { mutate, isLoading, isSuccess } = useMutation({
    mutationFn: () => postBoard({ title: 'title', content: postText }),
    onSuccess: () => {
      Toast.success('게시글이 성공적으로 업로드 되었습니다.');
      queryClient.invalidateQueries(['boardList']);
    },
    onError: () => {
      Toast.error(
        '게시글을 업로드하지 못했습니다. 잠시후 다시 시도해주세요.🥲',
      );
    },
  });
  return { mutate, isLoading, isSuccess };
}
