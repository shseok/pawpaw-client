'use client';

import { Dispatch, SetStateAction } from 'react';
import PlusCircleIcon from '@/public/PlusCircle.svg';
import PaperPlaneIcon from '@/public/PaperPlaneTilt.svg';

export default function MessageInput({
  setMessage,
  sendMessage,
  handleOnKeyPress,
}: {
  setMessage: Dispatch<SetStateAction<string>>;
  sendMessage: () => void;
  handleOnKeyPress: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <footer className="relative flex items-center px-10 py-6">
      <button type="button" className="absolute left-14">
        <PlusCircleIcon className="w-8 h-8" />
      </button>
      <textarea
        className="w-full p-2 pl-20 pr-14 shadow-chatCard rounded-[10px] outline-none scrollbar-hide resize-none"
        onKeyDown={handleOnKeyPress}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="button" className="absolute right-14" onClick={sendMessage}>
        <PaperPlaneIcon className="w-8 h-8 " />
      </button>
    </footer>
  );
}
