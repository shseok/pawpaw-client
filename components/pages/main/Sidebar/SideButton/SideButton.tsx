import { SidebarProps } from '@/types/types';

export default function SideButton({
  activeButton,
  setActive,
  svgComponent,
  desktopWidth,
  router,
}: Pick<
  SidebarProps,
  'activeButton' | 'setActive' | 'svgComponent' | 'desktopWidth' | 'router'
>) {
  const color = activeButton === svgComponent.name ? '#0ABE7D' : '#74787D';
  const names: { [key: string]: string } = {
    Feed: '피드',
    Community: '커뮤니티',
    Pawzone: 'Paw zone',
    Mypage: '마이 페이지',
    Search: '검색',
    Alert: '알림',
  };
  const name = names[svgComponent.name];
  const clickHandler = () => {
    setActive(`${svgComponent.name}`);
    router();
  };

  return (
    <div
      className={`relative flex flex-row ${
        desktopWidth === true ? 'items' : 'justify'
      }-center h-16 flex-nowrap`}
    >
      <button type="button" onClick={clickHandler}>
        {activeButton === svgComponent.name &&
        svgComponent.name !== 'Search' &&
        svgComponent.name !== 'Alert' ? (
          <div className="absolute top-0 left-0 w-[5px] h-16 bg-[#0ABE7D]" />
        ) : null}
        {desktopWidth === true ? (
          <div className="flex ml-6 flex-nowrap">
            {svgComponent({ color })}
            <div className={`text-xl ml-3 cursor-pointer`} style={{ color }}>
              {name}
            </div>
          </div>
        ) : (
          <div className="flex flex-row items-center">
            {svgComponent({ color })}
          </div>
        )}
      </button>
    </div>
  );
}
