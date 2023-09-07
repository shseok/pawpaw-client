/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-unused-expressions */

import React, { useEffect, useState } from 'react';
import useViewportTracker from '@/hooks/common/useViewportTracker';
import SidebarLogo from '../SidebarLogo';
import SideButtonContainer from '../SideButtonContainer';
import BottomToggle from '../BottomToggle';
import useGetPathname from '../hooks/useGetPathname';

export default function ModalSidebar() {
  const [toggle, setToggle] = useState(true);
  const desktopWidth = toggle === true ? `w-[256px]` : `w-[96px]`;
  const viewportWidth = useViewportTracker();
  const pathname = useGetPathname();
  const [activeButton, setActiveButton] = useState(pathname);
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    viewportWidth?.width! < 1240 ? setToggle(false) : setToggle(true);
    setActiveButton(pathname);
  }, [viewportWidth, pathname]);

  return (
    <nav
      className={`top-0 h-screen left-0 bg-[#F7F8F9] hidden tablet:block ${desktopWidth}`}
    >
      <SidebarLogo desktopWidth={toggle} />
      <SideButtonContainer
        desktopWidth={toggle}
        activeButton={activeButton}
        setActive={setActiveButton}
        pathname={pathname}
        setShowModal={setShowModal}
      />
      <BottomToggle
        desktopWidth={toggle}
        toggleButton={() => setToggle(!toggle)}
        viewport={viewportWidth?.width}
      />
    </nav>
  );
}
