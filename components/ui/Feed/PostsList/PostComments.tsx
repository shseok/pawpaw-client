/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
export default function PostComments({
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
    <div key={id} onClick={onClickModal}>
      <div className="inline-block mr-1 body2 text-grey-500">{userName}</div>
      <div className="inline body4 text-grey-500">{content}</div>
    </div>
  );
}
