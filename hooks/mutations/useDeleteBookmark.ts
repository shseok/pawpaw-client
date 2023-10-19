import { deleteBookmarkBoard } from '@/service/board';
import Toast from '@/utils/notification';
import { useMutation } from '@tanstack/react-query';

export default function useDeleteBookmark() {
  const { mutate, isLoading } = useMutation({
    mutationFn: deleteBookmarkBoard,
    onSuccess: () => {
      Toast.success('북마크가 성공적으로 삭제 되었습니다.');
    },
    onError: () => {
      Toast.error('북마크를 삭제하지 못했습니다. 잠시후 다시 시도해주세요.🥲');
    },
  });
  return { mutate, isLoading };
}
