export default function SideButton({ activeButton, onClick, svgComponent, desktopWidth }: SidebarProps) {
  const color = activeButton === svgComponent.name ? "#0ABE7D" : "#74787D";
  const names: { [key: string]: string } = {
    Feed: "피드",
    Community: "커뮤니티",
    Mypage: "마이 페이지",
    Search: "검색",
    Alert: "알림",
  };
  const name = names[svgComponent.name];

  return (
    <>
      <div className={`relative flex flex-row ${desktopWidth === true ? "items" : "justify"}-center h-16 flex-nowrap`} onClick={onClick}>
        {activeButton === svgComponent.name && svgComponent.name !== "Search" && svgComponent.name !== "Alert" ? (
          <div className="absolute left-0 w-[5px] h-16 bg-[#0ABE7D]" />
        ) : null}
        {desktopWidth === true ? (
          <div className="flex flex-nowrap ml-7">
            {svgComponent({ color })}
            <div className={`text-xl ml-3 cursor-pointer`} style={{ color }}>
              {name}
            </div>
          </div>
        ) : (
          <div className="flex flex-row items-center">{svgComponent({ color })}</div>
        )}
      </div>
    </>
  );
}
