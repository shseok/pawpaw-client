import PostsList from "@/components/ui/Feed/PostsList";
import FlexBox from "@/components/ui/FlexBox";
import FeedHeader from "@/components/ui/Feed/FeedHeader";
import Sidebar from "@/components/ui/Sidebar/Sidebar";

export default function Feed() {
  return (
    <>
      <FlexBox direction="column" className={`w-[1028px] gap-[40px] ml-[295px]`}>
        <FeedHeader />
        <PostsList />
      </FlexBox>
    </>
  );
}
