import FlexBox from '@/components/ui/FlexBox';
import { getRecommendedChatList } from '@/service/community';
import RecommendChatCarousel from './RecommendChatCarousel';

export default async function RecommendChatList() {
  const list = await getRecommendedChatList();

  return (
    <FlexBox direction="column" className="gap-3 tablet:gap-5">
      <RecommendChatCarousel recommendedChatList={list} />
    </FlexBox>
  );
}
