import { useRouter } from 'next/navigation';
import { SidebarProps } from '@/types/types';
import SideButton from './SideButton/SideButton';
import DesktopSvg from './SideButton/DesktopSvg';

export default function SideButtonContainer({
  desktopWidth,
  activeButton,
  setActive,
  pathname,
}: Pick<
  SidebarProps,
  'desktopWidth' | 'activeButton' | 'setActive' | 'pathname'
>) {
  const { Feed, Community, Pawzone, Mypage, Search, Notice } = DesktopSvg;
  const router = useRouter();
  const pseudoElementWidth =
    desktopWidth === true ? `${viewport / 8}` : 'w-[72px]';

  return (
    <>
      <SideButton
        svgComponent={Feed}
        activeButton={activeButton}
        desktopWidth={desktopWidth}
        setActive={setActive}
        router={() => router.push('/')}
        viewport={viewport}
      />
      <SideButton
        svgComponent={Community}
        activeButton={activeButton}
        desktopWidth={desktopWidth}
        setActive={setActive}
        router={() => router.push('/community')}
        viewport={viewport}
      />
      <SideButton
        svgComponent={Pawzone}
        activeButton={activeButton}
        desktopWidth={desktopWidth}
        setActive={setActive}
        router={() => router.push('/pawzone')}
        viewport={viewport}
      />
      <SideButton
        svgComponent={Mypage}
        activeButton={activeButton}
        desktopWidth={desktopWidth}
        setActive={setActive}
        router={() => router.push('/mypage')}
        viewport={viewport}
      />

      <div className="flex flex-row items-center justify-center h-10">
        <div className={`h-[0.5px] bg-[#CBCDD2] ${pseudoElementWidth}`} />
      </div>
      <SideButton
        svgComponent={Search}
        activeButton={activeButton}
        desktopWidth={desktopWidth}
        setActive={setActive}
        router={() => router.push(pathname)}
      />
      <SideButton
        svgComponent={Notice}
        activeButton={activeButton}
        desktopWidth={desktopWidth}
        setActive={setActive}
        router={() => router.push(pathname)}
      />
    </>
  );
}
