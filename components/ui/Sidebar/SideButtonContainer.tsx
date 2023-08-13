import { useRouter } from 'next/navigation';
import { SidebarProps } from '@/types/types';
import SideButton from './SideButton/SideButton';
import DesktopSvg from './SideButton/DesktopSvg';

export default function SideButtonContainer({
  desktopWidth,
  activeButton,
  setActive,
}: Pick<SidebarProps, 'desktopWidth' | 'activeButton' | 'setActive'>) {
  const { Feed, Community, PawZone, Mypage, Search, Alert } = DesktopSvg;
  const router = useRouter();
  const pseudoElementWidth = desktopWidth === true ? 'w-[232px]' : 'w-[72px]';

  return (
    <>
      <SideButton
        svgComponent={Feed}
        activeButton={activeButton}
        desktopWidth={desktopWidth}
        setActive={setActive}
        router={() => router.push('/')}
      />
      <SideButton
        svgComponent={Community}
        activeButton={activeButton}
        desktopWidth={desktopWidth}
        setActive={setActive}
        router={() => router.push('/community')}
      />
      <SideButton
        svgComponent={PawZone}
        activeButton={activeButton}
        desktopWidth={desktopWidth}
        setActive={setActive}
        router={() => router.push('/pawzone')}
      />
      <SideButton
        svgComponent={Mypage}
        activeButton={activeButton}
        desktopWidth={desktopWidth}
        setActive={setActive}
        router={() => router.push('/mypage')}
      />

      <div className="flex flex-row items-center justify-center h-10">
        <div className={`${pseudoElementWidth} h-[0.5px] bg-[#CBCDD2]`} />
      </div>
      <SideButton
        svgComponent={Search}
        activeButton={activeButton}
        desktopWidth={desktopWidth}
        setActive={setActive}
        router={() => router.push('/')}
      />
      <SideButton
        svgComponent={Alert}
        activeButton={activeButton}
        desktopWidth={desktopWidth}
        setActive={setActive}
        router={() => router.push('/')}
      />
    </>
  );
}
