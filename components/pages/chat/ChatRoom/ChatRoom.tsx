'use client';

import useInput from '@/hooks/common/useInput';
import { Frame, Stomp, CompatClient } from '@stomp/stompjs';
import { useEffect, useRef, useState } from 'react';
import SockJs from 'sockjs-client';
import { ChatType } from '@/types/types';
import ChatRoomBox from './ChatRoomBox';
import ChatRoomHeader from './ChatRoomHeader';
import ChatInput from './ChatInput';

export default function ChatRoom({
  roomId,
  title,
}: {
  roomId: string;
  title: string;
}) {
  const [currentChatList, setCurrentChatList] = useState<ChatType[]>([]);
  const [chatText, onChangeValue, resetValue] = useInput('');
  const stompClient = useRef<CompatClient>();

  const sendChat = () => {
    if (chatText.trim().length !== 0) {
      const isConnected = stompClient.current?.connected;
      if (isConnected) {
        stompClient.current?.send(
          `/pub/chatroom/${roomId}/message`,
          {},
          JSON.stringify({ data: chatText }),
        );
      }
    }
    resetValue();
  };

  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      if (!e.shiftKey) {
        e.preventDefault();
        sendChat();
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
        ({ body }) => {
          const newChat = JSON.parse(body);
          setCurrentChatList((prevChatList) => [...prevChatList, newChat]);
        },
      );
    });
    return () => {
      stompClient.current?.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col w-full h-screen bg-[#F5FFF6] border-r-[1px]">
      <ChatRoomHeader title={title} />
      <ChatRoomBox currentChatList={currentChatList} />
      <ChatInput
        onChangeValue={onChangeValue}
        sendChat={sendChat}
        handleOnKeyPress={handleOnKeyPress}
        chatText={chatText}
      />
    </div>
  );
}
