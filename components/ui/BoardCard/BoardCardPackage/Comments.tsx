/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
export default function BoardCardComments({
  userName,
  content,
}: {
  userName: string;
  content: string;
}) {
  return (
    <div className="flex flex-row hover:cursor-pointer">
      <div className="inline-block mr-1 body2 text-grey-500">{userName}</div>
      <div className="inline body4 text-grey-500">{content}</div>
    </div>
  );
}
