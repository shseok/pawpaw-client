import { SidebarProps } from '@/types/types';
import Header from './Header/Header';
import Footer from './Footer/Footer';

export default function ResponsiveNavbar({
  activeButton,
  setActive,
}: Pick<SidebarProps, 'activeButton' | 'setActive'>) {
  return (
    <>
      <Header />
      <Footer activeButton={activeButton} setActive={setActive} />
    </>
  );
}
