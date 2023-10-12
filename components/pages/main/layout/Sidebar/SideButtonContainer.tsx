import { useRouter } from 'next/navigation';
import { SidebarProps } from '@/types/types';
import SideButton from './SideButton';
import { ButtonType } from '../Footer/FooterButton';

export const buttonArrays = ['Feed', 'Community', 'Pawzone', 'Mypage'];

export default function SideButtonContainer({
  isSidebarOpen,
  activeButton,
  setActive,
  pathname,
}: Pick<SidebarProps, 'activeButton' | 'setActive' | 'pathname'> & {
  isSidebarOpen: boolean;
}) {
  const router = useRouter();

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
          isOpenSidebar={isSidebarOpen}
          clickHandler={() => clickHandler(buttonType)}
          key={buttonType}
        />
      ))}
      <div className={`h-[0.5px] bg-grey-300 mx-3 my-[19.75px]`} />
      <SideButton
        buttonType="Search"
        activeButton={activeButton}
        isOpenSidebar={isSidebarOpen}
        clickHandler={() => clickHandler(pathname)}
      />
      <SideButton
        buttonType="Notice"
        activeButton={activeButton}
        isOpenSidebar={isSidebarOpen}
        clickHandler={() => clickHandler(pathname)}
      />
    </>
  );
}
