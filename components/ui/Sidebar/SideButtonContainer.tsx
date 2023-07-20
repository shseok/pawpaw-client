"use client";

import { useState } from "react";
import SideButton from "./SideButton/SideButton";
import { svgComponents } from "./SideButton/svgComponents";

export default function SideButtonContainer() {
  const { Feed, Community, Mypage, Search, Alert } = svgComponents;
  const [activeButton, setActiveButton] = useState("Feed");

  return (
    <>
      <SideButton svgComponent={Feed} activeButton={activeButton} onClick={() => setActiveButton("Feed")} />
      <SideButton svgComponent={Community} activeButton={activeButton} onClick={() => setActiveButton("Community")} />
      <SideButton svgComponent={Mypage} activeButton={activeButton} onClick={() => setActiveButton("Mypage")} />
      <div className="relative h-7">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 h-[0.5px] border-[0.5px]" />
      </div>
      <SideButton svgComponent={Search} activeButton={activeButton} onClick={() => setActiveButton("Search")} />
      <SideButton svgComponent={Alert} activeButton={activeButton} onClick={() => setActiveButton("Alert")} />
    </>
  );
}
