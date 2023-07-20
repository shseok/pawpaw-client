import Image from "next/image";

interface BottomToggleProps {
  onClick: () => void;
}

export default function BottomToggle({ onClick }: BottomToggleProps) {
  return (
    <>
      <div className="absolute bottom-0 w-full h-[48px] bg-[#E9EBED]">
        <button className="absolute top-0 bottom-0 right-3" onClick={onClick}>
          <Image src="/sidebar/desktop/desktoptoggle.svg" alt="logo" width={24} height={24} className="" />
        </button>
      </div>
    </>
  );
}
