'use client';

import { ChangeEvent, useState } from 'react';
import PaperPlaneIcon from '@/public/PaperPlaneTilt.svg';
import PlusCircleIcon from '@/public/PlusCircle.svg';

export default function MessageInput() {
  const [message, setMessage] = useState('');

  const messageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };
  console.log('message', message);
  return (
    <footer className="relative flex items-center px-10 py-6">
      <button type="button" className="absolute left-14">
        <PlusCircleIcon className="w-8 h-8" />
      </button>
      <textarea
        className="w-full p-2 pl-20 pr-14 shadow-chatCard rounded-[10px] outline-none scrollbar-hide resize-none"
        onChange={messageHandler}
      />
      <button type="button" className="absolute right-14">
        <PaperPlaneIcon className="w-8 h-8 " />
      </button>
    </footer>
  );
}
