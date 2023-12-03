import WarningCircle from '@/public/svgs/Pawzone/warning_circle.svg';
import Star from '@/public/svgs/Pawzone/star.svg';
import RatioBar from './RatioBar';
import ReviewCard from './ReviewCard';
import ImageSlider from './ImageSlider';
import useGetReviewList from '@/hooks/queries/useGetReviewList';
import {
  deleteMyPlaceReview,
  getMyPlaceReview,
  getPlaceReviewList,
} from '@/service/pawzone';
import { useEffect, useState } from 'react';
import { Review, Place } from '@/types/types';
import ReviewModal from '@/components/ui/Modal/ReviewModal';
import { REVIEW_KEYWORDS } from '@/constant/place';
import ReviewButton from './ReviewButton';
import Toast from '@/utils/notification';

interface Props {
  place: Place;
}

export default function ReviewContent({
  place: {
    id,
    score,
    scenicRatio,
    quietRatio,
    cleanRatio,
    comfortableRatio,
    safeRatio,
    accessibleRatio,
    imageUrlList,
  },
}: Props) {
  const [content, setContent] = useState<Review[]>([]);
  const [myReview, setMyReview] = useState<Review | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const ratioArr = [
    scenicRatio,
    quietRatio,
    comfortableRatio,
    accessibleRatio,
    cleanRatio,
    safeRatio,
  ];
  // const { data, isLoading, Observer } = useGetReviewList({
  //   placeId: id,
  //   size: 5,
  // });
  const handleReviewMutate = () => setIsOpen(!isOpen);
  const handleReviewDelete = async () => {
    try {
      await deleteMyPlaceReview({ placeId: id });
      setMyReview(null);
      Toast.success('리뷰가 삭제되었습니다.');
    } catch (e) {
      if (e instanceof Error) {
        Toast.error(e.message);
      }
    }
  };
  useEffect(() => {
    const fetchReviewList = async () => {
      const { content } = await getPlaceReviewList({ placeId: id, size: 5 });
      const myReview = await getMyPlaceReview({ placeId: id });
      setMyReview(myReview);
      setContent(content);
    };

    fetchReviewList();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-7 overflow-x-hidden">
        <p className="header3 text-grey-800">이 장소에 대한 리뷰 😀</p>
        {content.length < 1 ? (
          <div className="flex flex-col items-center justify-center gap-2">
            <WarningCircle className="w-12 h-12 fill-grey-300" />
            <p className="body-4 text-grey-300">아직 등록된 리뷰가 없습니다.</p>
            <ReviewButton
              mode={myReview ? 'edit' : 'write'}
              handleToggle={handleReviewMutate}
            />
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Star className="w-7 h-7 fill-yellow-100" />
                  <p className="header2 text-grey-800">
                    {score ? Math.round(score * 10) / 10 : 0}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <ReviewButton
                    mode="delete"
                    handleToggle={handleReviewDelete}
                  />
                  <ReviewButton
                    mode={myReview ? 'edit' : 'write'}
                    handleToggle={handleReviewMutate}
                  />
                </div>
              </div>
              <div className="flex flex-col rounded-[10px] shadow-chatCard p-5 gap-2">
                {Array.from({ length: REVIEW_KEYWORDS.length }, (_, index) => (
                  <RatioBar
                    title={REVIEW_KEYWORDS[index].text}
                    ratio={Math.round((ratioArr[index] ?? 0) * 100)}
                  />
                ))}
              </div>
            </div>
            <ImageSlider urls={imageUrlList} />
            {/* 자신의 리뷰 */}
            {myReview && (
              <ReviewCard
                name={myReview.reviewerNickname}
                subName="2살 초코"
                description={myReview.content}
                rating={myReview.score}
                ImageSrc={myReview.reviewerImageUrl}
                placeReviewImageList={myReview.placeReviewImageList.map(
                  (obj) => obj.imageUrl,
                )}
                key={myReview.placeReviewId}
              />
            )}
            {content.map((review) => (
              <ReviewCard
                name={review.reviewerNickname}
                subName="2살 초코"
                description={review.content}
                rating={review.score}
                ImageSrc={review.reviewerImageUrl}
                key={review.placeReviewId}
              />
            ))}
          </>
        )}
        <ReviewModal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          myInfo={myReview}
        />
      </div>
      {/* <Observer>
        <div className="flex justify-center">
          <button type="button" className="body2 text-grey-800">
            리뷰 더보기
          </button>
        </div>
      </Observer> */}
    </>
  );
}
