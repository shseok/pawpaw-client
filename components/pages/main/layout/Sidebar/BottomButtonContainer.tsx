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
      <div
        className={`flex flex-row ${
          isSidebarOpen === true ? 'ml-5' : 'justify-center'
        }`}
      >
        <button
          type="button"
          className="absolute bottom-16 left-0 w-full flex flex-row items-center justify-center desktop:justify-start desktop:ml-6"
        >
          <Logout />
          <span
            className={cn(
              'hidden desktop:block body4 text-grey-500 ml-[8px] desktop:ml-0',
              isSidebarOpen ? null : 'desktop:hidden',
            )}
          >
            로그아웃
          </span>
        </button>
      </div>
      <div className="absolute bottom-0 w-full h-12 bg-grey-200">
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
