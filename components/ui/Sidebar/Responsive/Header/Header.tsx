import React from "react";
import HeaderLogo from "./HeaderLogo";
import { MobileSvg } from "../MobileSvg";

export default function Header() {
  const { Search, Alert } = MobileSvg;
  const color = "#74787D";

  return (
    <>
      <nav className="fixed flex flex-row items-center justify-between border-b-[1px] border-[#E9EBED] flex-nowrap h-[60px] visible tablet:invisible w-full z-10 bg-white">
        <div className="ml-5 sm:ml-10">
          <HeaderLogo />
        </div>
        <div className="flex flex-row mr-5 flex-nowra sm:mr-10">
          <button className="mr-[18px]">{Search({ color })}</button>
          <button>{Alert({ color })}</button>
        </div>
      </nav>
    </>
  );
}
