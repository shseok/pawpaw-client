'use client';

import BoardsList from '@/components/pages/main/Feed/BoardsList';
import FlexBox from '@/components/ui/FlexBox';
import FeedHeader from '@/components/pages/main/Feed/FeedHeader';

export default function Feed() {
  return (
    <FlexBox direction="column" className="w-full gap-10">
      <FeedHeader />
      <BoardsList />
    </FlexBox>
  );
}
