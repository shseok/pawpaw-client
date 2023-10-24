import Logo from '@/public/svgs/logo.svg';
import Link from 'next/link';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full bg-primary-50 px-8 xs:px-20 py-12 overflow-y-scroll">
      <header className="flex justify-center xs:justify-start">
        <Link href="/">
          <Logo className="w-36 h-10 hidden xs:block" />
        </Link>
      </header>
      <div className="max-w-[530px] h-auto bg-white px-5 py-10 xs:px-[60px] xs:py-[60px] flex flex-col items-center justify-between mx-auto xs:mt-8 rounded-[10px] shadow-md">
        {children}
      </div>
      <div id="modal-root" />
    </div>
  );
}
