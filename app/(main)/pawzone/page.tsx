import { Metadata } from 'next';
import SearchArea from './_components/Search';
import Map from './_components/Map';

export const metadata: Metadata = {
  title: 'pawpaw | Zone',
  description: '반려동물을 위한 장소를 찾아보고 리뷰를 달아 공유해보세요!',
};

export default function PawzonePage() {
  return (
    <main className="flex-1 flex w-full relative bg-white">
      <SearchArea />
      <Map />
    </main>
  );
}
