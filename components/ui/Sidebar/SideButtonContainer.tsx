'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';
import { SidebarProps } from '@/types/types';
import SideButton from './SideButton/SideButton';
import DesktopSvg from './SideButton/DesktopSvg';

export default function SideButtonContainer({
  desktopWidth,
}: Pick<SidebarProps, 'desktopWidth'>) {
  const { Feed, Community, PawZone, Mypage, Search, Alert } = DesktopSvg;
  const router = useRouter();
  const [activeButton, setActiveButton] = useState('Feed');
  const pseudoElementWidth = desktopWidth === true ? 'w-[232px]' : 'w-[72px]';

  return (
    <>
      <SideButton
        svgComponent={Feed}
        activeButton={activeButton}
        desktopWidth={desktopWidth}
        setActive={() => setActiveButton('Feed')}
        router={() => router.push('/')}
      />
      <SideButton
        svgComponent={Community}
        activeButton={activeButton}
        desktopWidth={desktopWidth}
        setActive={() => setActiveButton('Community')}
        router={() => router.push('/community')}
      />
      <SideButton
        svgComponent={PawZone}
        activeButton={activeButton}
        desktopWidth={desktopWidth}
        setActive={() => setActiveButton('PawZone')}
        router={() => router.push('/pawzone')}
      />
      <SideButton
        svgComponent={Mypage}
        activeButton={activeButton}
        desktopWidth={desktopWidth}
        setActive={() => setActiveButton('Mypage')}
        router={() => router.push('/mypage')}
      />

      <div className="flex flex-row items-center justify-center h-10">
        <div className={`${pseudoElementWidth} h-[0.5px] bg-[#CBCDD2]`} />
      </div>
      <SideButton
        svgComponent={Search}
        activeButton={activeButton}
        desktopWidth={desktopWidth}
        setActive={() => setActiveButton('Search')}
        router={() => router.push('/')}
      />
      <SideButton
        svgComponent={Alert}
        activeButton={activeButton}
        desktopWidth={desktopWidth}
        setActive={() => setActiveButton('Alert')}
        router={() => router.push('/')}
      />
    </>
  );
}
