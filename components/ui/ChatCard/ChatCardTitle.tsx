import Badge from "../Badge";
import FlexBox from "../FlexBox";

export default function ChatCardTitle({ title }: { title: string }) {
  return (
    <FlexBox className="gap-1">
      <h3 className="text-xl font-bold">{title}</h3>
      <Badge />
    </FlexBox>
  );
}
