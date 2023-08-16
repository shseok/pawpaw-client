'use client';

import { Dispatch, SetStateAction, useRef, useEffect } from 'react';
import PlusCircleIcon from '@/public/PlusCircle.svg';
import PaperPlaneIcon from '@/public/PaperPlaneTilt.svg';

interface MessageInputType {
  setMessage: Dispatch<SetStateAction<string>>;
  sendMessage: () => void;
  handleOnKeyPress: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  message: string;
}

export default function MessageInput({
  setMessage,
  sendMessage,
  handleOnKeyPress,
  message,
}: MessageInputType) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [message]);
  return (
    <footer className="relative flex items-center px-10 py-6 ">
      <button type="button" className="absolute left-14">
        <PlusCircleIcon className="w-8 h-8" />
      </button>
      <textarea
        ref={textareaRef}
        className="w-full p-2 pl-20 pr-14 shadow-chatCard rounded-[10px] outline-none scrollbar-hide resize-none max-h-40"
        onKeyDown={handleOnKeyPress}
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <button type="button" className="absolute right-14" onClick={sendMessage}>
        <PaperPlaneIcon className="w-8 h-8 " />
      </button>
    </footer>
  );
}
