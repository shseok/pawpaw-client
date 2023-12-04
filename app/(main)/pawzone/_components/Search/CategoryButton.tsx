import ParkIcon from '@/public/svgs/pawzone/park.svg';
import CafeIcon from '@/public/svgs/pawzone/cafe.svg';
import RestaurantIcon from '@/public/svgs/pawzone/restaurant.svg';

type PlaceType = keyof typeof placeMap;
interface Props {
  type: PlaceType;
  handleSearchPlace: () => void;
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

export default function CategoryButton({ type, handleSearchPlace }: Props) {
  const ButtonIcon = placeMap[type];
  return (
    <button
      type="submit"
      className="flex gap-1 items-center mt-4 py-2 px-[22px] bg-white rounded-[500px] shadow-searchBar"
      onClick={handleSearchPlace}
    >
      <ButtonIcon className="w-[22px] h-[22px] fill-primary-200" />
      <span className="body4 text-grey-800">{categoryType[type]}</span>
    </button>
  );
}
