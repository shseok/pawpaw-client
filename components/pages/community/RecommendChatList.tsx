// import { redirect } from 'next/navigation';
import FlexBox from '@/components/ui/FlexBox';
import getRecommendedChatList from '@/service/community';
import RecommendChatCarousel from './RecommendChatCarousel';

export default async function RecommendChatList() {
  const list = await getRecommendedChatList()
    .then((res) => res)
    .catch((error) => {
      console.error(error);
      // redirect('/auth/login');
    });

  return (
    <FlexBox direction="column" className="gap-3 tablet:gap-5">
      <h1 className="flex w-full mb-3 text-xl font-bold tablet:mb-5">
        <p className="hidden text-green-600 tablet:block">지상최강감자</p>
        <p className="hidden tablet:block">님에게 추천하는 </p>
        <p>신규 채팅방</p>
      </h1>
      <RecommendChatCarousel recommendedChatList={list} />
    </FlexBox>
  );
}
