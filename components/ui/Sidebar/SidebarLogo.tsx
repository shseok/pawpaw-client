import Image from "next/image";

export default function SidebarLogo({ desktopWidth }: Pick<SidebarProps, "desktopWidth">) {
  return (
    <>
      <figure className={`${desktopWidth === true ? "mt-8 mb-10" : "mt-8 mb-11"}`}>
        <Image
          src={`/sidebar/desktop/${desktopWidth === true ? "desktop_logo" : "tablet_logo"}.svg`}
          alt="logo"
          width={`${desktopWidth === true ? 140 : 50}`}
          height={`${desktopWidth === true ? 42 : 60}`}
          className="mx-auto"
        />
      </figure>
    </>
  );
}
