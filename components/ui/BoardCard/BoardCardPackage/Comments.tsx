/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useRouter } from 'next/navigation';

export default function BoardCardComments({
  boardId,
  userName,
  content,
}: {
  boardId: number;
  userName: string;
  content: string;
}) {
  const router = useRouter();

  return (
    <div
      className="flex flex-row hover:cursor-pointer"
      onClick={() => router.push(`/board/${boardId}`)}
    >
      <div className="inline-block mr-1 body2 text-grey-500">{userName}</div>
      <div className="inline body4 text-grey-500">{content}</div>
    </div>
  );
}
