import PostsList from '@/components/pages/main/Feed/PostsList';
import FlexBox from '@/components/ui/FlexBox';
import FeedHeader from '@/components/pages/main/Feed/FeedHeader';

export default function Feed() {
  return (
    <FlexBox direction="column" className="gap-10">
      <FeedHeader />
      <PostsList />
    </FlexBox>
  );
}
