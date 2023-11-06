import Logo from '@/public/svgs/logo.svg';
import SmallLogo from '@/public/svgs/sidebar/small-logo.svg';
import { cn } from '@/utils/common';
import Link from 'next/link';

// 사이드바를 열었을 때, Logo 컴포넌트를 렌더링하고, 닫았을 때는 SmallLogo 컴포넌트를 렌더링합니다.
export default function SidebarLogo({
  isSidebarOpen,
}: {
  isSidebarOpen: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Move to Mainpage"
      className={`${
        isSidebarOpen ? 'mt-8 mb-10' : 'mt-8 mb-11'
      } flex flex-row justify-center`}
    >
      <Logo
        className={cn(
          'w-[140px] h-[42px] hidden desktop:block',
          isSidebarOpen ? null : 'desktop:hidden',
        )}
      />
      <SmallLogo
        className={cn(
          'block desktop:hidden',
          isSidebarOpen ? null : 'desktop:block',
        )}
      />
    </Link>
  );
}
