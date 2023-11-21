import WarningCircle from '@/public/svgs/Pawzone/warning_circle.svg';
import Star from '@/public/svgs/Pawzone/star.svg';
import RatioBar from './RatioBar';
import Divider from '@/components/ui/Divider';
import ReviewCard from './ReviewCard';

interface Props {
  rating: number;
  images: string[];
}

export default function ReviewContent({ rating, images }: Props) {
  return (
    <div className="flex flex-col gap-7">
      <p className="header3 text-grey-800">이 장소에 대한 리뷰 😀</p>
      {/* TODO: 빈 리뷰에만 적용 */}
      <div className="flex flex-col items-center justify-center gap-2">
        <WarningCircle className="w-12 h-12 fill-grey-300" />
        <p className="body-4 text-grey-300">아직 등록된 리뷰가 없습니다.</p>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Star className="w-7 h-7 fill-yellow-100" />
            <p className="header2 text-grey-800">{rating}</p>
          </div>
          <button type="button" className="p-2 body2 text-grey-400">
            {`리뷰쓰기 >`}
            <Divider type="horizontal" className="h-[2px] bg-grey-400" />
          </button>
        </div>
        <div className="flex flex-col rounded-[10px] shadow-chatCard p-5 gap-2">
          <RatioBar title="경치가 좋아요" ratio={90} />
          <RatioBar title="조용해요" ratio={96} />
          <RatioBar title="편안해요" ratio={50} />
          <RatioBar title="접근성이 좋아요" ratio={80} />
          <RatioBar title="깨끗해요" ratio={64} />
          <RatioBar title="안전해요" ratio={100} />
        </div>
      </div>
      {/* 이미지 스라이더 */}
      <ReviewCard
        name="애옹맘"
        subName="2살 초코"
        description="AI 추천이랑 잘 맞는다고 뜨길래 친구 꼬셔서 한번 방문해보았습니다~ 역시 쾌적하고 좋더라구요! 강아지 산책도 많이 시키고 있던데 숨겨진 핫플인가 싶었어요. 친구네 강아지도 신났는지 여기저기 엄청 돌아다녔어요 한번 꼭 방문해보세요! 추천합니다!!"
        rating={5}
        ImageSrc="https://ldb-phinf.pstatic.net/20230912_108/16945174495700yKn7_JPEG/IMG_2586.jpeg"
      />
      <ReviewCard
        name="애옹맘"
        subName="2살 초코"
        description="AI 추천이랑 잘 맞는다고 뜨길래 친구 꼬셔서 한번 방문해보았습니다~ 역시 쾌적하고 좋더라구요! 강아지 산책도 많이 시키고 있던데 숨겨진 핫플인가 싶었어요. 친구네 강아지도 신났는지 여기저기 엄청 돌아다녔어요 한번 꼭 방문해보세요! 추천합니다!!"
        rating={5}
        ImageSrc="https://ldb-phinf.pstatic.net/20230912_108/16945174495700yKn7_JPEG/IMG_2586.jpeg"
      />
      <ReviewCard
        name="애옹맘"
        subName="2살 초코"
        description="AI 추천이랑 잘 맞는다고 뜨길래 친구 꼬셔서 한번 방문해보았습니다~ 역시 쾌적하고 좋더라구요! 강아지 산책도 많이 시키고 있던데 숨겨진 핫플인가 싶었어요. 친구네 강아지도 신났는지 여기저기 엄청 돌아다녔어요 한번 꼭 방문해보세요! 추천합니다!!"
        rating={5}
        ImageSrc="https://ldb-phinf.pstatic.net/20230912_108/16945174495700yKn7_JPEG/IMG_2586.jpeg"
      />
    </div>
  );
}
