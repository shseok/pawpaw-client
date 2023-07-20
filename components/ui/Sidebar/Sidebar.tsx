import Image from "next/image";
import SideButtonContainer from "./SideButtonContainer";

export default function Sidebar() {
  return (
    <>
      <section className="fixed left-0 w-64 h-screen bg-[#F7F8F9]">
        <div className="my-7">
          <Image src="/sidebar/desktop/desktop_logo.svg" alt="logo" width={140} height={42} className="mx-auto" />
        </div>
        <SideButtonContainer />
      </section>
    </>
  );
}
