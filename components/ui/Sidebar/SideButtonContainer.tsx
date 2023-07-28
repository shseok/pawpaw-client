"use client";

import { useState } from "react";
import SideButton from "./SideButton/SideButton";
import { DesktopSvg } from "./SideButton/DesktopSvg";
import { SidebarProps } from "@/types/types";

export default function SideButtonContainer({ desktopWidth }: Pick<SidebarProps, "desktopWidth">) {
  const { Feed, Community, Mypage, Search, Alert } = DesktopSvg;
  const [activeButton, setActiveButton] = useState("Feed");
  const pseudoElementWidth = desktopWidth === true ? "w-[232px]" : "w-[72px]";

  return (
    <>
      <SideButton svgComponent={Feed} activeButton={activeButton} desktopWidth={desktopWidth} onClick={() => setActiveButton("Feed")} />
      <SideButton svgComponent={Community} activeButton={activeButton} desktopWidth={desktopWidth} onClick={() => setActiveButton("Community")} />
      <SideButton svgComponent={Mypage} activeButton={activeButton} desktopWidth={desktopWidth} onClick={() => setActiveButton("Mypage")} />
      <div className="flex flex-row items-center justify-center h-10">
        <div className={`${pseudoElementWidth} h-[0.5px] bg-[#CBCDD2]`} />
      </div>
      <SideButton svgComponent={Search} activeButton={activeButton} desktopWidth={desktopWidth} onClick={() => setActiveButton("Search")} />
      <SideButton svgComponent={Alert} activeButton={activeButton} desktopWidth={desktopWidth} onClick={() => setActiveButton("Alert")} />
    </>
  );
}
