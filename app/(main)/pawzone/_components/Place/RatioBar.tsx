interface Props {
  title: string;
  ratio: number;
}

export default function RatioBar({ title, ratio }: Props) {
  const barWidth = `${ratio}%`;
  const barStyle = { width: barWidth };
  return (
    <div className="flex justify-between items-center">
      <p className="body3 text-grey-700">{title}</p>
      <div className="flex h-full">
        <div className="relative w-[180px] h-full my-[3px]">
          <div
            className="absolute top-0 left-0 h-[18px] bg-primary-200 rounded z-10"
            style={barStyle}
          />
          <div className="absolute top-0 left-0 w-[180px] h-[18px] bg-grey-100 rounded" />
        </div>
        <p className="body3 text-grey-700 min-w-[50px] text-right">{`${ratio}%`}</p>
      </div>
    </div>
  );
}
