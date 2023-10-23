export default function BoardCardComments({
  userName,
  content,
}: {
  userName: string;
  content: string;
}) {
  return (
    <div className="flex flex-row">
      <div className="inline-block mr-1 body2 text-grey-500">{userName}</div>
      <div className="inline body4 text-grey-500">{content}</div>
    </div>
  );
}
