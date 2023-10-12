import Avatar from '@/components/ui/Avatar';
import { MessageType } from '@/types/types';

export default function Message({ ...message }: MessageType) {
  const {
    sender,
    // chatType,
    // chatroomId,
    createdDate,
    data,
    // senderId,
    senderImageUrl,
  } = message;
  const messageSelfClass = sender ? 'self-start' : 'self-end';
  const messageFlexClass = sender ? 'flex-row' : 'flex-row-reverse';
  const messageStyleClass = sender
    ? 'bg-primary-200 text-white rounded-tl-none'
    : 'bg-primary-100 text-black rounded-tr-none';

  return (
    <div className={`flex gap-3 mb-5 w-fit ${messageSelfClass} `}>
      {sender && <Avatar image={senderImageUrl} name={sender} />}
      <div className="flex flex-col gap-1">
        {sender && <p className="body3 text-grey-600">{sender}</p>}
        <div className={`flex gap-1 ${messageFlexClass}`}>
          <p
            className={`p-4  break-words body1 rounded-2xl ${messageStyleClass}`}
          >
            {data}
          </p>
          <span className="self-end w-fit caption2 text-grey-500">
            {createdDate}
          </span>
        </div>
      </div>
    </div>
  );
}
