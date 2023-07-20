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
    <div className="flex flex-row items-center h-20 ml-5 flex-nowrap" onClick={onClick}>
      {svgComponent({ color })}
      <div className={`text-[${color}] text-2xl ml-3 cursor-pointer`}>{name}</div>
    </div>
  );
}
