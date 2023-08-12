'use client';

import { useState } from 'react';
import SideButtonContainer from './SideButtonContainer';
import BottomToggle from './BottomToggle';
import SidebarLogo from './SidebarLogo';
import ResponsiveNavbar from './Responsive/ResponsiveNavbar';

export default function Sidebar() {
  const [toggle, setToggle] = useState(true);
  const desktopWidth = toggle === true ? 'w-64' : 'w-24';

  return (
    <>
      <nav
        className={`fixed top-0 h-screen left-0 ${desktopWidth}  bg-[#F7F8F9] hidden tablet:block`}
      >
        <SidebarLogo desktopWidth={toggle} />
        <SideButtonContainer desktopWidth={toggle} />
        <BottomToggle
          desktopWidth={toggle}
          onClick={() => setToggle(!toggle)}
        />
      </nav>
      <div>
        <div className={`sticky ${desktopWidth} hidden tablet:block`} />
      </div>
      <ResponsiveNavbar />
    </>
  );
}
