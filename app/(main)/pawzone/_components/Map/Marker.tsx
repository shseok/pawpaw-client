import MarkerIcon from '@/public/svgs/pawzone/park.svg';
import Star from '@/public/svgs/Pawzone/star.svg';
import { OverlayView } from '@react-google-maps/api';

interface Props {
  position: { lat: number; lng: number };
  text: string;
  rating: number | null;
}

export default function Marker({ position, text, rating }: Props) {
  const getPixelPositionOffset = (width: number, height: number) => ({
    x: -(width / 2),
    y: -(height / 2),
  });

  return (
    <OverlayView
      position={position}
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
      getPixelPositionOffset={getPixelPositionOffset}
    >
      <div className="flex w-fit justify-center items-center bg-white rounded-[100px] border border-primary-200 py-2 pl-2 pr-4 gap-1">
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
              {rating || '평가 없음'}
            </span>
          </div>
        </div>
      </div>
    </OverlayView>
  );
}
