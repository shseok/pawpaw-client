// NavComponent.js

import React, { Dispatch, SetStateAction } from 'react';
import SidebarLogo from '../SidebarLogo';
import SideButtonContainer from '../SideButtonContainer';
import BottomToggle from '../BottomToggle';

interface DesktopSidebarProps {
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
  desktopWidth: string;
  activeButton: string;
  setActiveButton: (button: string) => void;
  setSearchModal: Dispatch<SetStateAction<boolean>>;
  setNoticeModal: Dispatch<SetStateAction<boolean>>;
}
export default function DesktopSidebar({
  toggle,
  setToggle,
  desktopWidth,
  activeButton,
  setActiveButton,
  setSearchModal,
  setNoticeModal,
}: DesktopSidebarProps) {
  return (
    <nav
      className={`fixed h-screen left-0 bg-[#F7F8F9] hidden tablet:block ${desktopWidth}`}
    >
      <SidebarLogo desktopWidth={toggle} />
      <SideButtonContainer
        desktopWidth={toggle}
        activeButton={activeButton}
        setActive={setActiveButton}
        setSearchModal={setSearchModal}
        setNoticeModal={setNoticeModal}
      />
      <BottomToggle
        desktopWidth={toggle}
        toggleButton={() => setToggle(!toggle)}
      />
    </nav>
  );
}
