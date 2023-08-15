import ChatRoomBox from './ChatRoomBox';
import ChatRoomHeader from './ChatRoomHeader';
import MessageInput from './MessageInput';

export default function ChatRoom() {
  return (
    <div className="flex flex-col w-full h-screen bg-[#F5FFF6] border-r-[1px]">
      <ChatRoomHeader title="awdawd" />
      <ChatRoomBox />
      <MessageInput />
    </div>
  );
}
