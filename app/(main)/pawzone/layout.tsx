import { Metadata } from 'next';
import Map from './_components/Map';

export const metadata: Metadata = {
  title: 'pawpaw | Zone',
  description: '반려동물을 위한 장소를 찾아보고 리뷰를 달아 공유해보세요!',
};

export default function PawzoneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative bg-white flex flex-1">
      {children}
      <Map />
    </main>
  );
}
