interface FooterButtonProps {
  activeButton: string;
  setActive: (props: string) => void;
  svgComponent: (props: { color: string }) => JSX.Element;
  router: () => void;
}

export default function FooterButton({
  activeButton,
  setActive,
  svgComponent,
  router,
}: FooterButtonProps) {
  const color = activeButton === svgComponent.name ? '#0ABE7D' : '#74787D';
  const names: { [key: string]: string } = {
    Feed: '피드',
    Community: '커뮤니티',
    Pawzone: 'paw zone',
    Mypage: '마이페이지',
  };
  const name = names[svgComponent.name];
  const clickHandler = () => {
    setActive(`${svgComponent.name}`);
    router();
  };

  return (
    <div className="w-[88px] sm:w-[139px] flex flex-row justify-center flex-wrap">
      <button
        type="button"
        className="w-[18x] h-[18px] mb-1"
        onClick={clickHandler}
      >
        {svgComponent({ color })}
      </button>
      <div className="w-full h-[10px] text-xs text-center" style={{ color }}>
        {name}
      </div>
    </div>
  );
}
