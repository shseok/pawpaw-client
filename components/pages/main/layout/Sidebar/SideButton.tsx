import { SidebarProps } from '@/types/types';
import Feed from '@/public/sidebar/feed.svg';
import Community from '@/public/sidebar/chat.svg';
import Pawzone from '@/public/sidebar/map-pin.svg';
import Mypage from '@/public/sidebar/user-circle.svg';
import Search from '@/public/sidebar/magnifying-glass.svg';
import Notice from '@/public/sidebar/bell.svg';
import { cn } from '@/utils/common';

const buttonMaps = {
  Feed,
  Community,
  Pawzone,
  Mypage,
  Search,
  Notice,
} as const;

const iconNames = {
  Feed: '피드',
  Community: '커뮤니티',
  Pawzone: 'Paw zone',
  Mypage: '마이 페이지',
  Search: '검색',
  Notice: '알림',
};

type ButtonType = keyof typeof buttonMaps;

type SideButtonProps = Pick<SidebarProps, 'activeButton'> & {
  buttonType: ButtonType;
  clickHandler: () => void;
  isOpenSidebar: boolean;
};

export default function SideButton({
  activeButton,
  buttonType,
  clickHandler,
  isOpenSidebar,
}: SideButtonProps) {
  const name = iconNames[buttonType];
  const ButtonIcon = buttonMaps[buttonType];
  const buttonStyle = cn(
    'fill-grey-500 w-7 h-7',
    activeButton === buttonType ? 'fill-primary-200' : null,
  );
  const textStyle = cn(
    'ml-3 header3 cursor-pointer text-grey-500 hidden desktop:block',
    activeButton === buttonType ? 'text-primary-200' : null,
    isOpenSidebar ? null : 'desktop:hidden',
  );
  return (
    <div
      className={cn(
        'relative flex flex-row justify-center desktop:justify-start h-16 flex-nowrap',
        isOpenSidebar ? null : 'desktop:justify-center',
      )}
    >
      <button type="button" onClick={clickHandler}>
        {activeButton === buttonType &&
        buttonType !== 'Search' &&
        buttonType !== 'Notice' ? (
          <div className="absolute top-0 left-0 w-[5px] h-16 bg-primary-200" />
        ) : null}
        <div
          className={cn(
            'flex desktop:ml-6 desktop:flex-nowrap items-center',
            isOpenSidebar ? null : 'desktop:ml-0',
          )}
        >
          <ButtonIcon className={buttonStyle} />
          <div className={textStyle}>{name}</div>
        </div>
      </button>
    </div>
  );
}
