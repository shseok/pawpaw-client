import { SidebarProps } from '@/types/types';

export default function SideButton({
  activeButton,
  setActive,
  svgComponent,
  desktopWidth,
  router,
  viewport,
}: Pick<
  SidebarProps,
  | 'activeButton'
  | 'setActive'
  | 'svgComponent'
  | 'desktopWidth'
  | 'router'
  | 'viewport'
>) {
  const color = activeButton === svgComponent.name ? '#0ABE7D' : '#74787D';
  const names: { [key: string]: string } = {
    Feed: '피드',
    Community: '커뮤니티',
    Pawzone: 'Paw zone',
    Mypage: '마이 페이지',
    Search: '검색',
    Notice: '알림',
  };
  const name = names[svgComponent.name];
  const clickHandler = () => {
    setActive(`${svgComponent.name}`);
    router();
  };
  const textSize = `${viewport / 96}`;
  const svgSize = `${viewport / 65}`;

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
            <div className="ml-3 text-xl cursor-pointer" style={{ color }}>
              {name}
            </div>
          </div>
        ) : (
          <div className="flex flex-row items-center">
            {svgComponent({ color, svgSize })}
          </div>
        )}
      </button>
    </div>
  );
}
