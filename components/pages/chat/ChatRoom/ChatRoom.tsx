'use client';

import useInput from '@/hooks/common/useInput';
import { CompatClient } from '@stomp/stompjs';
import { useEffect, useRef, useState } from 'react';
import { ChatType } from '@/types/types';
import useSocket from '@/hooks/common/useSocket';
import { useQueryClient } from '@tanstack/react-query';
import { queryKeys } from '@/constant/query-keys';
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
  const { createClient } = useSocket();
  const queryClient = useQueryClient();
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
    if (e.key === 'Enter' && e.shiftKey) {
      return;
    }
    if (e.key === 'Enter') {
      sendChat();
    }
  };

  useEffect(() => {
    stompClient.current = createClient(
      process.env.NEXT_PUBLIC_SOCKET_URL as string,
    );
    stompClient.current.debug = (debug) => {
      console.log('debug', debug);
    };
    stompClient.current.connect({}, () => {
      stompClient.current?.subscribe(
        `/sub/chatroom/${roomId}/message`,
        (chat) => {
          const newChat = JSON.parse(chat.body);
          if (newChat.chatType === 'LEAVE' && 'JOIN') {
            queryClient.invalidateQueries([queryKeys.CHATROOM_USER_LIST]);
          }
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
