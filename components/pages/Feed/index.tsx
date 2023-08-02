import PostsList from "@/components/ui/PostsList";
import Upload from "@/components/ui/Upload";
import FlexBox from "@/components/ui/FlexBox";

export default function Feed() {
  return (
    <>
      <FlexBox direction="column" className="w-[1028px] gap-[40px] pl-36">
        <Upload />
        <PostsList />
      </FlexBox>
    </>
  );
}
