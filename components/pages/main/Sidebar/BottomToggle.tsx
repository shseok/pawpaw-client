import Image from 'next/image';
import { SidebarProps } from '@/types/types';
import DesktopSvg from './SideButton/DesktopSvg';

export default function BottomToggle({
  desktopWidth,
  toggleButton,
  viewport,
}: Pick<SidebarProps, 'desktopWidth' | 'toggleButton' | 'viewport'>) {
  const { Logout } = DesktopSvg;
  return (
    <div>
      <div
        className={`flex flex-row ${
          desktopWidth === true ? 'ml-5' : 'justify-center'
        }`}
      >
        <button
          type="button"
          className={`absolute flex flex-row items-center bottom-16 `}
        >
          {Logout()}
          {desktopWidth === true ? (
            <span className="text-base text-[#74787D] ml-[8px]">로그아웃</span>
          ) : null}
        </button>
      </div>
      <div className="absolute bottom-0 w-full h-12 bg-[#E9EBED]">
        {viewport < 1240 ? null : (
          <button
            type="button"
            className="absolute top-0 bottom-0 right-3"
            onClick={toggleButton}
          >
            <Image
              src={`/sidebar/desktop/${
                desktopWidth === true ? 'desktoptoggle' : 'tablettoggle'
              }.svg`}
              alt="logo"
              width={24}
              height={24}
            />
          </button>
        )}
      </div>
    </div>
  );
}
