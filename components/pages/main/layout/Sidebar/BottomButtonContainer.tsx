import Logout from '@/public/svgs/sidebar/logout.svg';
import ArrowRightIcon from '@/public/svgs/arrow-right.svg';
import { cn } from '@/utils/common';
import { logout } from '@/service/auth';
import Toast from '@/utils/notification';

export default function BottomButtonContainer({
  isSidebarOpen,
  handleClick,
}: {
  isSidebarOpen: boolean;
  handleClick: () => void;
}) {
  const handleLogout = async () => {
    try {
      await logout();
      window.location.href = '/';
    } catch (e) {
      if (e instanceof Error) {
        Toast.error(e.message);
      }
    }
  };

  return (
    <div>
      <button
        type="button"
        className={cn(
          'w-full h-16 flex flex-row items-center justify-center desktop:justify-start desktop:pl-6 hover:bg-grey-120 transition-all duration-300',
          isSidebarOpen ? null : 'desktop:justify-center desktop:pl-0',
        )}
        onClick={handleLogout}
      >
        <Logout />
        <span
          className={cn(
            'hidden desktop:block body4 text-grey-500 desktop:ml-3',
            isSidebarOpen ? null : 'desktop:hidden',
          )}
        >
          로그아웃
        </span>
      </button>
      <div className="relative w-full h-12 bg-grey-200">
        <button
          type="button"
          className="hidden desktop:flex justify-center items-center absolute top-1/2 -translate-y-1/2 right-3 bg-white rounded-full w-6 h-6"
          onClick={handleClick}
        >
          <ArrowRightIcon
            className={cn(
              'w-4 h-4 transition-transform duration-400 transform',
              isSidebarOpen ? 'rotate-180' : null,
            )}
          />
        </button>
      </div>
    </div>
  );
}
