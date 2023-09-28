import Logo from '@/public/Auth/desktop-logo.svg';
import Link from 'next/link';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full bg-primary-50 px-20 py-12 overflow-y-scroll">
      <header className="flex justify-start">
        <Link href="/">
          <Logo className="w-36 h-10" />
        </Link>
      </header>
      <div className="max-w-[530px] h-[100%] bg-white px-[60px] py-[60px] flex flex-col items-center justify-between mx-auto mt-8 rounded-[10px] shadow-md">
        {children}
      </div>
      <div id="modal-root" />
    </div>
  );
}
