interface SidebarButtonProps {
  svgComponent: (props: { color: string }) => JSX.Element;
  activeButton: string;
  onClick: () => void;
}

export default function SideButton({ activeButton, onClick, svgComponent }: SidebarButtonProps) {
  const color = activeButton === svgComponent.name ? "#0ABE7D" : "#74787D";
  const name =
    svgComponent.name === "Feed"
      ? "피드"
      : svgComponent.name === "Community"
      ? "커뮤니티"
      : svgComponent.name === "Mypage"
      ? "마이 페이지"
      : svgComponent.name === "Search"
      ? "검색"
      : "알림";
  return (
    <>
      <div className="flex flex-row items-center h-16 flex-nowrap" onClick={onClick}>
        {activeButton === svgComponent.name ? (
          <div className="relative h-16">
            <div className="absolute w-3 h-20 transform -translate-x-1/2 -translate-y-1/2 bg-[#0ABE7D] border-2 top-1/2 left-1/2  border-[#0ABE7D]" />
          </div>
        ) : null}
        <div className="flex flex-row items-center ml-5 flex-nowrap">
          {svgComponent({ color })}
          <div className={`text-xl ml-3 cursor-pointer`} style={{ color }}>
            {name}
          </div>
        </div>
      </div>
    </>
  );
}
