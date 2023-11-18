import { Metadata } from 'next';
import Map from './_components/Map';
import SearchBar from './_components/Search/SearchBar';

export const metadata: Metadata = {
  title: 'pawpaw | Zone',
  description: '반려동물을 위한 장소를 찾아보고 리뷰를 달아 공유해보세요!',
};

export default function PawzonePage() {
  return (
    <main className="relative bg-white">
      <SearchBar />
      <Map />
    </main>
  );
}
