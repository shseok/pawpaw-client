import Image from "next/image";

export default function HeaderLogo() {
  return (
    <>
      <figure>
        <Image src="/sidebar/mobile/mobile_logo.svg" alt="logo" width="80" height="23" className="mx-auto" />
      </figure>
    </>
  );
}
