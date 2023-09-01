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
  const desktopWidth = toggle === true ? `w-[256px]` : `w-[96px]`;
  const path = usePathname();
  //1240px 1120px
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
        className={`fixed top-0 h-screen left-0 bg-[#F7F8F9] hidden tablet:block ${desktopWidth}`}
      >
        <SidebarLogo desktopWidth={toggle} />
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
        <div className={`sticky hidden tablet:block ${desktopWidth}`} />
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
