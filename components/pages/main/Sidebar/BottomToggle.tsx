import Image from 'next/image';
import { SidebarProps } from '@/types/types';

export default function BottomToggle({
  desktopWidth,
  toggleButton,
}: Pick<SidebarProps, 'desktopWidth' | 'toggleButton'>) {
  return (
    <div className="absolute bottom-0 w-full h-12 bg-[#E9EBED]">
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
    </div>
  );
}
