import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';
import SideButton from './SideButton/SideButton';
import DesktopSvg from './SideButton/DesktopSvg';

interface SideButtonContainerProps {
  activeButton: string;
  setActive: (props: string) => void;
  desktopWidth: boolean;
  setSearchModal: Dispatch<SetStateAction<boolean>>;
  setNoticeModal: Dispatch<SetStateAction<boolean>>;
}

export default function SideButtonContainer({
  desktopWidth,
  activeButton,
  setActive,
  setSearchModal,
  setNoticeModal,
}: SideButtonContainerProps) {
  const { Feed, Community, Pawzone, Mypage, Search, Notice } = DesktopSvg;
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
        setSearchModal={setSearchModal}
        setNoticeModal={setNoticeModal}
      />
      <SideButton
        svgComponent={Community}
        activeButton={activeButton}
        desktopWidth={desktopWidth}
        setActive={setActive}
        router={() => router.push('/community')}
        setSearchModal={setSearchModal}
        setNoticeModal={setNoticeModal}
      />
      <SideButton
        svgComponent={Pawzone}
        activeButton={activeButton}
        desktopWidth={desktopWidth}
        setActive={setActive}
        router={() => router.push('/pawzone')}
        setSearchModal={setSearchModal}
        setNoticeModal={setNoticeModal}
      />
      <SideButton
        svgComponent={Mypage}
        activeButton={activeButton}
        desktopWidth={desktopWidth}
        setActive={setActive}
        router={() => router.push('/mypage')}
        setSearchModal={setSearchModal}
        setNoticeModal={setNoticeModal}
      />

      <div className="flex flex-row items-center justify-center h-10">
        <div className={`h-[0.5px] bg-[#CBCDD2] ${pseudoElementWidth}`} />
      </div>
      <SideButton
        svgComponent={Search}
        activeButton={activeButton}
        desktopWidth={desktopWidth}
        setActive={setActive}
        setSearchModal={setSearchModal}
        setNoticeModal={setNoticeModal}
      />
      <SideButton
        svgComponent={Notice}
        activeButton={activeButton}
        desktopWidth={desktopWidth}
        setActive={setActive}
        setSearchModal={setSearchModal}
        setNoticeModal={setNoticeModal}
      />
    </>
  );
}
