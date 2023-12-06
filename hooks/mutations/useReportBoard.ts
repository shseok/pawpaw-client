import { queryKeys } from '@/constant/query-keys';
import { cancelReportBoard, reportBoard } from '@/service/board';
import Toast from '@/utils/notification';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useReportBoard(id: number) {
  const queryClient = useQueryClient();

  const { mutate: report } = useMutation({
    mutationFn: () => reportBoard(id),
    onSuccess: () => {
      Toast.success('게시글이 성공적으로 신고 되었습니다.');
      queryClient.invalidateQueries([queryKeys.BOARD_LIST]);
    },
    onError: (error) => {
      if (error instanceof Error) {
        Toast.error(error.message);
      }
    },
  });

  const { mutate: cancelReport } = useMutation({
    mutationFn: () => cancelReportBoard(id),
    onSuccess: () => {
      Toast.success('게시글 신고가 취소되었습니다.');
      queryClient.invalidateQueries([queryKeys.BOARD_LIST]);
    },
    onError: (error) => {
      if (error instanceof Error) {
        Toast.error(error.message);
      }
    },
  });

  return { report, cancelReport };
}
