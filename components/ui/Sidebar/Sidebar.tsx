import Image from "next/image";
import SideButtonContainer from "./SideButtonContainer";

export default function Sidebar() {
  return (
    <>
      <section className="fixed left-0 w-64 h-screen bg-[#F7F8F9]">
        <div className="my-6">
          <Image src="/sidebar/desktop/desktop_logo.svg" alt="logo" width={150} height={30} className="mx-auto" />
        </div>
        <SideButtonContainer />
      </section>
    </>
  );
}
