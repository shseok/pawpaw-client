'use client';

import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import ChatRoomBox from './ChatRoomBox';
import ChatRoomHeader from './ChatRoomHeader';
import MessageInput from './MessageInput';

export default function ChatRoom({ roomId }: { roomId: string }) {
  const [message, setMessage] = useState('');

  // const socket = io(`서버주소/${roomId}`)

  const sendMessage = () => {
    alert(message);
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
