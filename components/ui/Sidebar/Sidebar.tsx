"use client";

import SideButtonContainer from "./SideButtonContainer";
import BottomToggle from "./BottomToggle";
import { useState } from "react";
import SidebarLogo from "./SidebarLogo";

export default function Sidebar() {
  const [toggle, setToggle] = useState(true);
  const desktopWidth = toggle === true ? "w-64" : "w-24";

  return (
    <>
      <nav className={`fixed left-0 ${desktopWidth} h-screen bg-[#F7F8F9]`}>
        <SidebarLogo desktopWidth={toggle} />
        <SideButtonContainer desktopWidth={toggle} />
        <BottomToggle desktopWidth={toggle} onClick={() => setToggle(!toggle)} />
      </nav>
    </>
  );
}
