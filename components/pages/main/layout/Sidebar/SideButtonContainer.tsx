import { useRouter } from 'next/navigation';
import { SidebarProps } from '@/types/types';
import SideButton from './SideButton';
import { ButtonType } from '../Footer/FooterButton';

export const buttonArrays = ['Feed', 'Community', 'Pawzone', 'Mypage'];

export default function SideButtonContainer({
  desktopWidth,
  activeButton,
  setActive,
  pathname,
}: Pick<
  SidebarProps,
  'desktopWidth' | 'activeButton' | 'setActive' | 'pathname'
>) {
  const router = useRouter();
  const pseudoElementWidth = desktopWidth === true ? 'w-[232px]' : 'w-[72px]';

  const clickHandler = (link: string) => {
    const activeLink =
      link === 'Feed'
        ? '/'
        : `/${link.charAt(0).toLowerCase()}${link.slice(1)}`;
    setActive(link);
    router.push(activeLink);
  };

  return (
    <>
      {buttonArrays.map((buttonType) => (
        <SideButton
          buttonType={buttonType as ButtonType}
          activeButton={activeButton}
          desktopWidth={desktopWidth}
          clickHandler={() => clickHandler(buttonType)}
          key={buttonType}
        />
      ))}
      <div className="flex flex-row items-center justify-center h-10">
        <div className={`h-[0.5px] bg-[#CBCDD2] ${pseudoElementWidth}`} />
      </div>
      <SideButton
        buttonType="Search"
        activeButton={activeButton}
        desktopWidth={desktopWidth}
        clickHandler={() => clickHandler(pathname)}
      />
      <SideButton
        buttonType="Notice"
        activeButton={activeButton}
        desktopWidth={desktopWidth}
        clickHandler={() => clickHandler(pathname)}
      />
    </>
  );
}
