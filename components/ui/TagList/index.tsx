import Tag from "../Tag";
import FlexBox from "../FlexBox";
export default function TagList({ list }: { list: string[] }) {
  return (
    <FlexBox justify="start" className="w-full gap-3 truncate">
      {list.map((tag) => (
        <Tag key={tag} tagName={tag} />
      ))}
    </FlexBox>
  );
}
