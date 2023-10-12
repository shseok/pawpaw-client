import { SidebarProps } from '@/types/types';
import Feed from '@/public/sidebar/feed.svg';
import Community from '@/public/sidebar/chat.svg';
import Pawzone from '@/public/sidebar/map-pin.svg';
import Mypage from '@/public/sidebar/user-circle.svg';
import { cn } from '@/utils/common';

const buttonMaps = {
  Feed,
  Community,
  Pawzone,
  Mypage,
} as const;

const iconNames = {
  Feed: '피드',
  Community: '커뮤니티',
  Pawzone: 'Paw zone',
  Mypage: '마이 페이지',
};

export type ButtonType = keyof typeof buttonMaps;

type SideButtonProps = Pick<SidebarProps, 'activeButton'> & {
  buttonType: ButtonType;
  clickHandler: () => void;
};

export default function FooterButton({
  activeButton,
  buttonType,
  clickHandler,
}: SideButtonProps) {
  const name = iconNames[buttonType];
  const ButtonIcon = buttonMaps[buttonType];
  const buttonStyle = cn(
    'fill-grey-500 w-6 h-6',
    activeButton === buttonType ? 'fill-primary-200' : '',
  );
  const textStyle = cn(
    'w-full h-[10px] text-xs text-center text-grey-400 leading-[10px] text-[10px] font-normal',
    activeButton === buttonType ? 'text-primary-200' : '',
  );

  return (
    <div className="w-[88px] sm:w-[139px] flex flex-row justify-center flex-wrap">
      <button
        type="button"
        className="w-[18x] h-[18px] mb-1"
        onClick={clickHandler}
      >
        <ButtonIcon className={buttonStyle} />
      </button>
      <div className={textStyle}>{name}</div>
    </div>
  );
}
