export default function PostCardComments({
  id,
  userName,
  content,
  onClickModal,
}: {
  id: number;
  userName: string;
  content: string;
  onClickModal: () => void;
}) {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div key={id} onClick={onClickModal}>
      <div className="inline-block mr-1 body2 text-grey-500">{userName}</div>
      <div className="inline body4 text-grey-500">{content}</div>
    </div>
  );
}
