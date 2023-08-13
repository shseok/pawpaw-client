'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import SideButtonContainer from './SideButtonContainer';
import BottomToggle from './BottomToggle';
import SidebarLogo from './SidebarLogo';
import ResponsiveNavbar from './Responsive/ResponsiveNavbar';

export default function Sidebar() {
  const [toggle, setToggle] = useState(true);
  const desktopWidth = toggle === true ? 'w-64' : 'w-24';
  const path = usePathname();
  const pathname =
    path === '/' ? 'Feed' : path.charAt(1).toUpperCase() + path.slice(2);
  const [activeButton, setActiveButton] = useState(pathname);

  return (
    <>
      <nav
        className={`fixed top-0 h-screen left-0 ${desktopWidth}  bg-[#F7F8F9] hidden tablet:block`}
      >
        <SidebarLogo desktopWidth={toggle} />
        <SideButtonContainer
          desktopWidth={toggle}
          activeButton={activeButton}
          setActive={setActiveButton}
        />
        <BottomToggle
          desktopWidth={toggle}
          toggleButton={() => setToggle(!toggle)}
        />
      </nav>
      <div>
        <div className={`sticky ${desktopWidth} hidden tablet:block`} />
      </div>
      <ResponsiveNavbar
        activeButton={activeButton}
        setActive={setActiveButton}
      />
    </>
  );
}
