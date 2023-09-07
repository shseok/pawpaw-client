import Header from './Header/Header';
import Footer from './Footer/Footer';

interface ResponsiveNavbarProps {
  activeButton: string;
  setActive: (props: string) => void;
}

export default function ResponsiveNavbar({
  activeButton,
  setActive,
}: ResponsiveNavbarProps) {
  return (
    <>
      <Header />
      <Footer activeButton={activeButton} setActive={setActive} />
    </>
  );
}
