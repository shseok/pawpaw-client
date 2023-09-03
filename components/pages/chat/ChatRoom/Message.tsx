import Avatar from '@/components/ui/Avatar';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Message({ message }: any) {
  const { userInfo, sender, text, sendTime } = message;
  const messageSelfClass = sender ? 'self-start' : 'self-end';
  const messageFlexClass = sender ? 'flex-row' : 'flex-row-reverse';
  const messageStyleClass = sender
    ? 'bg-primary-200 text-white rounded-tl-none'
    : 'bg-primary-100 text-black rounded-tr-none';

  return (
    <div className={`flex gap-3 mb-5 w-fit ${messageSelfClass} `}>
      {sender && <Avatar image={userInfo.userImg} name={userInfo.userName} />}
      <div className="flex flex-col gap-1">
        {sender && <p className="body3 text-grey-600">{userInfo.userName}</p>}
        <div className={`flex gap-1 ${messageFlexClass}`}>
          <p
            className={`p-4  break-words body1 rounded-2xl ${messageStyleClass}`}
          >
            {text}
          </p>
          <span className="self-end w-fit caption2 text-grey-500">
            {sendTime}
          </span>
        </div>
      </div>
    </div>
  );
}
