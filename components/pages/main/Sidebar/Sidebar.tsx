/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-unused-expressions */

'use client';

import { useEffect, useState } from 'react';
import useViewportTracker from '@/hooks/common/useViewportTracker';
import SideButtonContainer from './SideButtonContainer';
import BottomToggle from './BottomToggle';
import SidebarLogo from './SidebarLogo';
import ResponsiveNavbar from './Responsive/ResponsiveNavbar';
import useGetPathname from './hooks/useGetPathname';

export default function Sidebar() {
  const [toggle, setToggle] = useState(true);
  const desktopWidth = toggle === true ? `w-[256px]` : `w-[96px]`;
  const viewportWidth = useViewportTracker();
  const pathname = useGetPathname();
  const [activeButton, setActiveButton] = useState(pathname);
  useEffect(() => {
    viewportWidth?.width! < 1240 ? setToggle(false) : setToggle(true);
  }, [viewportWidth]);
  const login = async () => {
    const response = await fetch(`/api/auth`, {
      method: 'POST',
      body: JSON.stringify({
        email: 'test5@gmail.com',
        password: '1234',
      }),
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response);
  };
  return (
    <>
      <nav
        className={`fixed top-0 h-screen left-0 bg-[#F7F8F9] hidden tablet:block ${desktopWidth}`}
      >
        <SidebarLogo desktopWidth={toggle} />
        <button type="button" onClick={login}>
          login
        </button>
        <SideButtonContainer
          desktopWidth={toggle}
          activeButton={activeButton}
          setActive={setActiveButton}
          pathname={pathname}
        />
        <BottomToggle
          desktopWidth={toggle}
          toggleButton={() => setToggle(!toggle)}
          viewport={viewportWidth?.width}
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
