'use client';

import { useState } from 'react';
import ChatRoomBox from './ChatRoomBox';
import ChatRoomHeader from './ChatRoomHeader';
import MessageInput from './MessageInput';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function ChatRoom({ roomId }: { roomId: string }) {
  // input 관련로직이 여기있는게 맞나? 분리를 해보자. 드랍다운 구현후에 그리고 여기는 서버컴포넌트로 바꾸자
  const [message, setMessage] = useState('');
  const sendMessage = () => {
    if (message.trim().length === 0) {
      return;
    }
    console.log('호출');
    setMessage('');
  };
  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // eslint-disable-next-line no-console
    if (e.key === 'Enter') {
      if (!e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    }
  };

  return (
    <div className="flex flex-col w-full h-screen bg-[#F5FFF6] border-r-[1px]">
      <ChatRoomHeader title="awdawd" />
      <ChatRoomBox />
      <MessageInput
        setMessage={setMessage}
        sendMessage={sendMessage}
        handleOnKeyPress={handleOnKeyPress}
        message={message}
      />
    </div>
  );
}
