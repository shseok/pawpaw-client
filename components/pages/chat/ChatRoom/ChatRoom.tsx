'use client';

import useInput from '@/hooks/common/useInput';
import { Frame, Stomp, CompatClient } from '@stomp/stompjs';
import { useEffect, useRef, useState } from 'react';
import SockJs from 'sockjs-client';
import { MessageType } from '@/types/types';
import ChatRoomBox from './ChatRoomBox';
import ChatRoomHeader from './ChatRoomHeader';
import MessageInput from './MessageInput';

export default function ChatRoom({ roomId }: { roomId: string }) {
  const [currentMessages, setCurrentMessages] = useState<MessageType[]>([]);
  const [message, onChangeValue, resetValue] = useInput('');
  const stompClient = useRef<CompatClient>();
  const sendMessage = () => {
    if (message.trim().length !== 0) {
      if (stompClient.current?.connected) {
        stompClient.current?.send(
          `/pub/chatroom/${roomId}/message`,
          {},
          JSON.stringify({ data: message }),
        );
      }
    }
    resetValue();
  };
  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      if (!e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    }
  };

  useEffect(() => {
    stompClient.current = Stomp.over(() => {
      const socketUrl = new SockJs('/endpoint/ws');
      return socketUrl;
    });
    stompClient.current.debug = (debug) => {
      console.log('debug', debug);
    };
    stompClient.current.connect({}, (frame: Frame) => {
      console.log(frame);
      stompClient.current?.subscribe(
        `/sub/chatroom/${roomId}/message`,
        (chat) => {
          const newMessage = JSON.parse(chat.body);
          console.log(newMessage);
          setCurrentMessages((prevMessages) => [...prevMessages, newMessage]);
        },
      );
    });
    return () => {
      stompClient.current?.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col w-full h-screen bg-[#F5FFF6] border-r-[1px]">
      <ChatRoomHeader title="awdawd" />
      <ChatRoomBox currentMessages={currentMessages} />
      <MessageInput
        onChangeValue={onChangeValue}
        sendMessage={sendMessage}
        handleOnKeyPress={handleOnKeyPress}
        message={message}
      />
    </div>
  );
}
