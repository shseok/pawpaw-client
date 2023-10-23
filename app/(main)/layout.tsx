import type { Metadata } from 'next';
import Sidebar from '@/components/pages/main/layout/Sidebar';
import Header from '@/components/pages/main/layout/Header';
import Footer from '@/components/pages/main/layout/Footer';

export const metadata: Metadata = {
  title: 'pawpaw | Home',
  description: '우리 반려동물을 위한 최적의 커뮤니티',
};

export default function MainLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className="flex flex-col flex-wrap h-full tablet:flex-row">
      <Header />
      <Sidebar />
      <div id="modal-root" />
      {children}
      {modal}
      <Footer />
    </div>
  );
}
