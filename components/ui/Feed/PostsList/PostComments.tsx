/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
export default function PostComments({
  commentId,
  commentUserName,
  commentContent,
  onClickModal,
}: {
  commentId: number;
  commentUserName: string;
  commentContent: string;
  onClickModal: () => void;
}) {
  return (
    <div key={commentId} onClick={onClickModal}>
      <div className="inline-block mr-1 body2 text-grey-500">
        {commentUserName}
      </div>
      <div className="inline body4 text-grey-500">{commentContent}</div>
    </div>
  );
}
