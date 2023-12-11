import ParkIcon from '@/public/svgs/Pawzone/park.svg';
import CafeIcon from '@/public/svgs/Pawzone/cafe.svg';
import RestaurantIcon from '@/public/svgs/Pawzone/restaurant.svg';
import { useRouter } from 'next/navigation';

type PlaceType = keyof typeof placeMap;
interface Props {
  type: PlaceType;
}

const categoryType = {
  RESTAURANT: '맛집',
  CAFE: '카페',
  PARK: '공원',
};

const placeMap = {
  RESTAURANT: RestaurantIcon,
  CAFE: CafeIcon,
  PARK: ParkIcon,
} as const;

export default function CategoryButton({ type }: Props) {
  const router = useRouter();
  const ButtonIcon = placeMap[type];
  return (
    <button
      type="button"
      className="flex gap-1 items-center mt-4 py-2 px-[22px] bg-white rounded-[500px] shadow-searchBar"
      onClick={() => {
        router.push(`/pawzone/search/${categoryType[type]}`);
      }}
    >
      <ButtonIcon className="w-[22px] h-[22px] fill-primary-200" />
      <span className="body4 text-grey-800">{categoryType[type]}</span>
    </button>
  );
}
