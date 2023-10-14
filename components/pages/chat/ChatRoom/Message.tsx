import Avatar from '@/components/ui/Avatar';
import { MessageType } from '@/types/types';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

export default function Message({ ...message }: MessageType) {
  const {
    userId,
    sender,
    chatType,
    // chatroomId,
    createdDate,
    data,
    senderId,
    senderImageUrl,
  } = message;

  const isWriter = userId === senderId;
  const messageSelfClass = isWriter ? 'self-end' : 'self-start';
  const messageFlexClass = isWriter ? 'flex-row-reverse' : 'flex-row-rerverse';
  const messageStyleClass = isWriter
    ? 'bg-primary-200 text-white rounded-tr-none'
    : 'bg-primary-100 text-black rounded-tl-none';
  if (chatType === 'MESSAGE') {
    return (
      <div className={`flex gap-3 mb-5 w-fit ${messageSelfClass} `}>
        {!isWriter && <Avatar image={senderImageUrl} name={sender} />}
        <div className="flex flex-col gap-1">
          {!isWriter && <p className="body3 text-grey-600">{sender}</p>}
          <div className={`flex gap-1 ${messageFlexClass}`}>
            <p
              className={`p-4  break-words body1 rounded-2xl ${messageStyleClass}`}
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
    return <div>d</div>;
  }
}
