import { useRouter } from 'next/navigation';
import { SidebarProps } from '@/types/types';
import FooterButton from './FooterButton';
import MobileSvg from '../MobileSvg';

export default function Footer({
  activeButton,
  setActive,
}: Pick<SidebarProps, 'activeButton' | 'setActive'>) {
  const { Feed, Community, Pawzone, Mypage } = MobileSvg;
  const router = useRouter();

  return (
    <nav className="block tablet:hidden">
      <div className="fixed bottom-0 flex flex-row items-center justify-between border-t-[1px] border-[#E9EBED] h-[54px] w-full bg-white z-10">
        <FooterButton
          svgComponent={Feed}
          activeButton={activeButton}
          setActive={setActive}
          router={() => router.push('/')}
        />
        <FooterButton
          svgComponent={Community}
          activeButton={activeButton}
          setActive={setActive}
          router={() => router.push('/community')}
        />
        <FooterButton
          svgComponent={Pawzone}
          activeButton={activeButton}
          setActive={setActive}
          router={() => router.push('/pawzone')}
        />
        <FooterButton
          svgComponent={Mypage}
          activeButton={activeButton}
          setActive={setActive}
          router={() => router.push('/mypage')}
        />
      </div>
    </nav>
  );
}
