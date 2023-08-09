import Badge from "../Badge";
import FlexBox from "../FlexBox";
import ShareIcon from "@/public/share.svg";
export default function ChatCardTitle({ title }: { title: string }) {
  return (
    <FlexBox justify="between" className="w-full">
      <FlexBox className="gap-1 w-fit">
        <h3 className="w-full text-xl font-bold truncate">{title}</h3>
        <Badge />
      </FlexBox>
      <button>
        <ShareIcon />
      </button>
    </FlexBox>
  );
}
