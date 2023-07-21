import Image from "next/image";

export default function BottomToggle({ desktopWidth, onClick }: Pick<SidebarProps, "desktopWidth" | "onClick">) {
  return (
    <>
      <div className="absolute bottom-0 w-full h-12 bg-[#E9EBED]">
        <button className="absolute top-0 bottom-0 right-3" onClick={onClick}>
          <Image src={`/sidebar/desktop/${desktopWidth === true ? "desktoptoggle" : "tablettoggle"}.svg`} alt="logo" width={24} height={24} />
        </button>
      </div>
    </>
  );
}
