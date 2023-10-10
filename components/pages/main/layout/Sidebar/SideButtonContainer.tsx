import { useRouter } from 'next/navigation';
import { SidebarProps } from '@/types/types';
import SideButton from './SideButton';

export default function SideButtonContainer({
  desktopWidth,
  activeButton,
  setActive,
  pathname,
}: Pick<
  SidebarProps,
  'desktopWidth' | 'activeButton' | 'setActive' | 'pathname'
>) {
  const router = useRouter();
  const pseudoElementWidth = desktopWidth === true ? 'w-[232px]' : 'w-[72px]';

  return (
    <>
      <SideButton
        buttonType="Feed"
        activeButton={activeButton}
        desktopWidth={desktopWidth}
        setActive={setActive}
        router={() => router.push('/')}
      />
      <SideButton
        buttonType="Community"
        activeButton={activeButton}
        desktopWidth={desktopWidth}
        setActive={setActive}
        router={() => router.push('/community')}
      />
      <SideButton
        buttonType="Pawzone"
        activeButton={activeButton}
        desktopWidth={desktopWidth}
        setActive={setActive}
        router={() => router.push('/pawzone')}
      />
      <SideButton
        buttonType="Mypage"
        activeButton={activeButton}
        desktopWidth={desktopWidth}
        setActive={setActive}
        router={() => router.push('/mypage')}
      />

      <div className="flex flex-row items-center justify-center h-10">
        <div className={`h-[0.5px] bg-[#CBCDD2] ${pseudoElementWidth}`} />
      </div>
      <SideButton
        buttonType="Search"
        activeButton={activeButton}
        desktopWidth={desktopWidth}
        setActive={setActive}
        router={() => router.push(pathname)}
      />
      <SideButton
        buttonType="Notice"
        activeButton={activeButton}
        desktopWidth={desktopWidth}
        setActive={setActive}
        router={() => router.push(pathname)}
      />
    </>
  );
}
