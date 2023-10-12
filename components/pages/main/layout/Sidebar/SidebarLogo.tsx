import Logo from '@/public/sidebar/logo.svg';
import SmallLogo from '@/public/sidebar/small-logo.svg';
import { cn } from '@/utils/common';

// 사이드바를 열었을 때, Logo 컴포넌트를 렌더링하고, 닫았을 때는 SmallLogo 컴포넌트를 렌더링합니다.
export default function SidebarLogo({
  isSidebarOpen,
}: {
  isSidebarOpen: boolean;
}) {
  return (
    <figure
      className={`${
        isSidebarOpen ? 'mt-8 mb-10' : 'mt-8 mb-11'
      } flex flex-row justify-center`}
    >
      <Logo
        className={cn(
          'hidden desktop:block',
          isSidebarOpen ? null : 'desktop:hidden',
        )}
      />
      <SmallLogo
        className={cn(
          'block desktop:hidden',
          isSidebarOpen ? null : 'desktop:block',
        )}
      />
    </figure>
  );
}
