/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-unused-expressions */

'use client';

import useGetPathname from '@/hooks/common/useGetPathname';
import SideButtonContainer from './SideButtonContainer';
import BottomButtonContainer from './BottomButtonContainer';
import SidebarLogo from './SidebarLogo';
import { cn } from '@/utils/common';
import { useState } from 'react';

// 사이드 바 토글에 따라 사이드바의 너비를 조절합니다. 또한, 뷰포트의 너비가 1240px 이하일 때 사이드바를 닫습니다.
export default function Sidebar() {
  const pathname = useGetPathname();
  const [toggle, setToggle] = useState(true);
  const [activeButton, setActiveButton] = useState(pathname);
  return (
    <>
      <nav
        className={cn(
          'sticky left-0 top-0 h-screen hidden tablet:block tablet:w-24 desktop:w-64 bg-grey-100',
          toggle
            ? 'tablet:w-24 desktop:w-64 transtion-none'
            : 'tablet:w-24 desktop:w-24 transition-width duration-200 ease-in-out',
        )}
      >
        <SidebarLogo isSidebarOpen={toggle} />
        <SideButtonContainer
          isSidebarOpen={toggle}
          activeButton={activeButton}
          setActive={setActiveButton}
          pathname={pathname}
        />
        <BottomButtonContainer
          isSidebarOpen={toggle}
          handleClick={() => setToggle(!toggle)}
        />
      </nav>
    </>
  );
}
