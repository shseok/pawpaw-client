import { queryKeys } from '@/constant/query-keys';
import { deleteBookmarkBoard } from '@/service/board';
import Toast from '@/utils/notification';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useDeleteBookmark() {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: deleteBookmarkBoard,
    onSuccess: () => {
      Toast.success('북마크가 성공적으로 삭제 되었습니다.');
      queryClient.invalidateQueries([queryKeys.BOARD_LIST]);
    },
  });
  return { mutate, isLoading };
}
