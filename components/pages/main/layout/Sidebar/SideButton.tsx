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

type SideButtonProps = Pick<SidebarProps, 'activeButton' | 'desktopWidth'> & {
  buttonType: ButtonType;
  clickHandler: () => void;
};

export default function SideButton({
  activeButton,
  buttonType,
  clickHandler,
  desktopWidth,
}: SideButtonProps) {
  const name = iconNames[buttonType];
  const ButtonIcon = buttonMaps[buttonType];
  const buttonStyle = cn(
    'fill-grey-500 w-7 h-7',
    activeButton === buttonType ? 'fill-primary-200' : '',
  );
  const textStyle = cn(
    'ml-3 text-xl cursor-pointe text-grey-500',
    activeButton === buttonType ? 'text-primary-200' : '',
  );
  return (
    <div
      className={`relative flex flex-row ${
        desktopWidth === true ? 'items' : 'justify'
      }-center h-16 flex-nowrap`}
    >
      <button type="button" onClick={clickHandler}>
        {activeButton === buttonType &&
        buttonType !== 'Search' &&
        buttonType !== 'Notice' ? (
          <div className="absolute top-0 left-0 w-[5px] h-16 bg-[#0ABE7D]" />
        ) : null}
        {desktopWidth === true ? (
          <div className="flex ml-6 flex-nowrap">
            <ButtonIcon className={buttonStyle} />
            <div className={textStyle}>{name}</div>
          </div>
        ) : (
          <div className="flex flex-row items-center">
            <ButtonIcon className={buttonStyle} />
          </div>
        )}
      </button>
    </div>
  );
}
