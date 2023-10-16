import Avatar from '@/components/ui/Avatar';
import { ChatType } from '@/types/types';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import Image from 'next/image';

export default function ChatItem({ ...chat }: ChatType) {
  const {
    userId,
    sender,
    chatType,
    createdDate,
    data,
    senderId,
    senderImageUrl,
  } = chat;

  const isWriter = userId === senderId;
  const chatSelfClass = isWriter ? 'self-end' : 'self-start';
  const chatFlexClass = isWriter ? 'flex-row-reverse' : 'flex-row-rerverse';
  const chatStyleClass = isWriter
    ? 'bg-primary-200 text-white rounded-tr-none'
    : 'bg-primary-100 text-black rounded-tl-none';
  if (chatType === 'MESSAGE') {
    return (
      <div className={`flex gap-3 mb-5 w-fit ${chatSelfClass} `}>
        {!isWriter && <Avatar image={senderImageUrl} name={sender} />}
        <div className="flex flex-col gap-1">
          {!isWriter && <p className="body3 text-grey-600">{sender}</p>}
          <div className={`flex gap-1 ${chatFlexClass}`}>
            <p
              className={`p-4 w-fit break-words whitespace-pre-line body1 rounded-2xl ${chatStyleClass}`}
            >
              {data}
            </p>
            <span className="self-end w-fit caption2 text-grey-500">
              {format(new Date(createdDate), 'aa h:mm', { locale: ko })}
            </span>
          </div>
        </div>
      </div>
    );
  }
  if (chatType === 'JOIN' || chatType === 'LEAVE') {
    return <div className="self-center mb-5 text-grey-500 body4">{data}</div>;
  }
  if (chatType === 'IMAGE') {
    return (
      <div className={`flex gap-3 mb-5 w-fit ${chatSelfClass} `}>
        {!isWriter && <Avatar image={senderImageUrl} name={sender} />}
        <div className="flex flex-col gap-1">
          {!isWriter && <p className="body3 text-grey-600">{sender}</p>}
          <div className={`flex gap-1 ${chatFlexClass}`}>
            <Image
              alt={sender}
              src={data}
              width={200}
              height={200}
              priority
              className="rounded-md"
            />
            <span className="self-end w-fit caption2 text-grey-500">
              {format(new Date(createdDate), 'aa h:mm', { locale: ko })}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
