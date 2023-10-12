import Logout from '@/public/sidebar/logout.svg';
import ArrowRightIcon from '@/public/arrow-right.svg';
import { cn } from '@/utils/common';

export default function BottomButtonContainer({
  isSidebarOpen,
  handleClick,
}: {
  isSidebarOpen: boolean;
  handleClick: () => void;
}) {
  return (
    <div>
      <button
        type="button"
        className={cn(
          'w-full h-16 flex flex-row items-center justify-center desktop:justify-start desktop:pl-6',
          isSidebarOpen ? null : 'desktop:justify-center desktop:pl-0',
        )}
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
