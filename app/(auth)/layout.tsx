import Logo from '@/public/Auth/desktop_logo.svg';
import Link from 'next/link';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full bg-primary-50 px-20 py-12">
      <header className="flex justify-start">
        <Link href="/">
          <Logo className="w-36 h-10" />
        </Link>
      </header>
      {children}
    </div>
  );
}
