import MarkerIcon from '@/public/svgs/Pawzone/park.svg';
import Star from '@/public/svgs/Pawzone/star.svg';
import { OverlayView } from '@react-google-maps/api';
import { useRouter } from 'next/navigation';

interface Props {
  position: { lat: number; lng: number };
  text: string;
  rating: number | null;
  placeIndex: number;
}

export default function Marker({ position, text, rating, placeIndex }: Props) {
  const getPixelPositionOffset = (width: number, height: number) => ({
    x: -(width / 2),
    y: -(height / 2),
  });
  const router = useRouter();

  return (
    <OverlayView
      position={position}
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
      getPixelPositionOffset={getPixelPositionOffset}
    >
      <button
        type="button"
        className="absolute flex w-fit justify-center items-center bg-white rounded-[100px] border border-primary-200 py-2 pl-2 pr-4 gap-1 z-[998] hover:z-[1000]"
        onClick={(e) => {
          e.stopPropagation();
          router.push(`/pawzone/place/${placeIndex}`);
        }}
      >
        <div className="bg-primary-200 rounded-full p-2">
          <MarkerIcon className="w-[22px] h-[22px] fill-white" />
        </div>
        <div className="flex flex-col">
          <div className="w-max overflow-hidden text-ellipsis">
            <span className="caption1 text-grey-800">{text}</span>
          </div>

          <div className="flex gap-[2px] w-max">
            <Star className="w-[14px] h-[14px] fill-yellow-100" />
            <span className="caption3 text-grey-800">
              {rating ? Math.round(rating * 10) / 10 : '평가 없음'}
            </span>
          </div>
        </div>
        {/* 말풍선 뾰족점 */}
        <div className="absolute bottom-[-11px] left-1/2 transform-translate-x-[-50%] w-0 h-0 border-solid border-t-[11px] border-x-[7px] border-b-0 border-t-primary-200 border-x-transparent border-b-transparent pointer-events-none">
          <div className="absolute top-[-11px] left-[-6px] w-0 h-0 border-solid border-x-[6px] border-t-[9px] border-b-0 border-t-white border-x-transparent border-b-transparent" />
        </div>
      </button>
    </OverlayView>
  );
}
