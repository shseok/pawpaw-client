import Image from "next/image";
import { SidebarProps } from "@/types/types";
import { DesktopSvg } from "./SideButton/DesktopSvg";

export default function SidebarLogo({ desktopWidth }: Pick<SidebarProps, "desktopWidth">) {
  const { toggleOnLogo, toggleOffLogo } = DesktopSvg;

  return (
    <>
      <figure className={`${desktopWidth === true ? "mt-8 mb-10" : "mt-8 mb-11"} flex flex-row justify-center`}>
        {desktopWidth === true ? toggleOnLogo() : toggleOffLogo()}
      </figure>
    </>
  );
}
