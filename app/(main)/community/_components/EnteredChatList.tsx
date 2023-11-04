import ImageChatCard from '@/components/ui/ChatCard/ImageChatCard';
import 'keen-slider/keen-slider.min.css';
import { fetchEnteredChatList } from '@/service/server/community';
import Carousel from './Carousel';

export default async function EnteredChatList() {
  const chatList = await fetchEnteredChatList();

  return (
    // <div>
    <Carousel>
      {chatList.length === 0 ? (
        <div className="w-full header4">현재 참여중인 채팅방이 없어요.</div>
      ) : (
        chatList.map((list) => (
          <div
            className="max-w-full min-w-full keen-slider__slide"
            key={list.id}
          >
            <ImageChatCard {...list} />
          </div>
        ))
      )}
    </Carousel>
    // </div>
  );
}
