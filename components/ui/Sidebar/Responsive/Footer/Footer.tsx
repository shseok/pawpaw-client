import { useRouter } from 'next/navigation';
import { SidebarProps } from '@/types/types';
import FotterButton from './FooterButton';
import MobileSvg from '../MobileSvg';

export default function Footer({
  activeButton,
  setActive,
}: Pick<SidebarProps, 'activeButton' | 'setActive'>) {
  const { Feed, Community, Chat, Mypage } = MobileSvg;
  const router = useRouter();

  return (
    <nav className="block tablet:hidden">
      <div className="fixed bottom-0 flex flex-row items-center justify-center border-t-[1px] border-[#E9EBED] h-[54px] w-full bg-white">
        <FotterButton
          svgComponent={Feed}
          activeButton={activeButton}
          setActive={setActive}
          router={() => router.push('/')}
        />
        <FotterButton
          svgComponent={Community}
          activeButton={activeButton}
          setActive={setActive}
          router={() => router.push('/community')}
        />
        <FotterButton
          svgComponent={Chat}
          activeButton={activeButton}
          setActive={setActive}
          router={() => router.push('/chat')}
        />
        <FotterButton
          svgComponent={Mypage}
          activeButton={activeButton}
          setActive={setActive}
          router={() => router.push('/mypage')}
        />
      </div>
    </nav>
  );
}
