import { useRef, useEffect, ChangeEvent } from 'react';
import PlusCircleIcon from '@/public/PlusCircle.svg';
import PaperPlaneIcon from '@/public/PaperPlaneTilt.svg';

interface MessageInputType {
  onChangeValue: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  sendMessage: () => void;
  handleOnKeyPress: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  message: string;
}

export default function MessageInput({
  onChangeValue,
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
  const messageEmpty = message.trim().length === 0;
  return (
    <div className="relative flex items-center w-full px-8 mb-6">
      <button type="button" className="absolute left-14">
        <PlusCircleIcon className="w-8 h-8" />
      </button>
      <textarea
        ref={textareaRef}
        className="w-full p-2 pl-20 pr-14 shadow-chatCard rounded-[10px] focus:ring-0 border-none scrollbar-hide resize-none max-h-40"
        onKeyUp={handleOnKeyPress}
        onChange={onChangeValue}
        value={message}
      />
      <button
        type="button"
        onClick={sendMessage}
        className={`absolute right-14 ${
          messageEmpty ? 'cursor-not-allowed' : ''
        }`}
        disabled={messageEmpty}
      >
        <PaperPlaneIcon
          className={`w-8 h-8 duration-200 ${
            messageEmpty ? 'fill-gray-300' : 'fill-primary-200'
          }`}
        />
      </button>
    </div>
  );
}
