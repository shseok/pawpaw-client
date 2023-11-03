import NormalChatCard from '@/components/ui/ChatCard/NormalChatCard';
import 'keen-slider/keen-slider.min.css';
import { fetchRecommendedChatList } from '@/service/server/community';
import Carousel from './Carousel';

export default async function RecommendChatList() {
  const recommendChatList = await fetchRecommendedChatList();

  return (
    <div>
      <Carousel>
        {recommendChatList.map((list) => (
          <div
            className="max-w-full min-w-full keen-slider__slide"
            key={list.id}
          >
            <NormalChatCard {...list} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
