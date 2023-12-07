import { queryKeys } from '@/constant/query-keys';
import {
  createOrUpdatePlaceReview,
  createPlaceReviewImage,
  deletePlaceReviewImage,
} from '@/service/pawzone';
import { ReviewMutateParams } from '@/types/types';
import Toast from '@/utils/notification';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useMutateReview({
  closeModal,
  placeId,
  mode,
}: {
  closeModal: () => void;
  placeId: number;
  mode: 'create' | 'edit';
}) {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: async ({
      score,
      content,
      accessible,
      quiet,
      safe,
      scenic,
      clean,
      comfortable,
      images,
      placeReviewImageIdList,
    }: Omit<ReviewMutateParams, 'placeId'> & { images?: File[] } & {
      placeReviewImageIdList?: number[];
    }) => {
      const { placeReviewId } = await createOrUpdatePlaceReview({
        placeId,
        score,
        content,
        accessible,
        quiet,
        safe,
        scenic,
        clean,
        comfortable,
      });

      if (!images) return;
      if (
        mode === 'edit' &&
        placeReviewImageIdList &&
        placeReviewImageIdList.length > 0
      ) {
        await deletePlaceReviewImage({
          placeId,
          placeReviewId,
          placeReviewImageIdList,
        });
      }
      await createPlaceReviewImage({ placeId, images, placeReviewId });
    },
    onSuccess: () => {
      Toast.success('리뷰가 등록되었어요.');
      return queryClient.invalidateQueries([queryKeys.REVIEW_LIST, placeId]);
    },
    onSettled: () => {
      closeModal();
    },
    onError: (error) => {
      if (error instanceof Error) {
        Toast.error(error.message);
      }
    },
  });

  return { mutate, isLoading };
}
