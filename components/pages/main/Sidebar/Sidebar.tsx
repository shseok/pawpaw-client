'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import useViewportTracker from '@/hooks/common/useViewportTracker';
import SideButtonContainer from './SideButtonContainer';
import BottomToggle from './BottomToggle';
import SidebarLogo from './SidebarLogo';
import ResponsiveNavbar from './Responsive/ResponsiveNavbar';

export default function Sidebar() {
  const [toggle, setToggle] = useState(true);
  const viewport = useViewportTracker();
  const responsiveWidth = [viewport.width / 7.5, viewport.width / 20];
  const desktopWidth =
    toggle === true ? `${responsiveWidth[0]}` : `${responsiveWidth[1]}`;
  const path = usePathname();
  let pathname;
  if (path === '/') {
    pathname = 'Feed';
  } else if (path.includes('chat')) {
    pathname = 'Chat';
  } else {
    pathname = path.charAt(1).toUpperCase() + path.slice(2);
  }
  const [activeButton, setActiveButton] = useState(pathname);

  return (
    <>
      <nav
        className="fixed top-0 h-screen left-0 bg-[#F7F8F9] hidden tablet:block"
        style={{ width: `${desktopWidth}px` }}
      >
        <SidebarLogo desktopWidth={toggle} viewport={viewport.width} />
        <SideButtonContainer
          desktopWidth={toggle}
          activeButton={activeButton}
          setActive={setActiveButton}
          viewport={viewport.width}
        />
        <BottomToggle
          desktopWidth={toggle}
          toggleButton={() => setToggle(!toggle)}
        />
      </nav>
      <div>
        <div
          className="sticky hidden tablet:block"
          style={{ width: `${desktopWidth}px` }}
        />
      </div>
      {pathname === 'Chat' ? (
        <div className="hidden">
          <ResponsiveNavbar
            activeButton={activeButton}
            setActive={setActiveButton}
          />
        </div>
      ) : (
        <ResponsiveNavbar
          activeButton={activeButton}
          setActive={setActiveButton}
        />
      )}
    </>
  );
}
