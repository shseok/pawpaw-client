import type { Metadata } from 'next';
import Sidebar from '@/components/pages/main/Sidebar/Sidebar';

export const metadata: Metadata = {
  title: 'pawpaw | Home',
  description: '우리 반려동물을 위한 최적의 커뮤니티',
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />
      <div id="modal-root" />
      {children}
    </div>
  );
}
