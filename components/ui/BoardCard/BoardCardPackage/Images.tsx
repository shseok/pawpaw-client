/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function PostCardImages({
  boardId,
  imgs,
}: {
  boardId: number;
  imgs: string[];
}) {
  const router = useRouter();

  if (imgs) {
    return (
      <div
        className="grid w-full grid-cols-2 place-content-stretch hover:cursor-pointer"
        onClick={() => router.push(`/board/${boardId}`)}
      >
        <div className="relative row-span-2 -z-10">
          <Image
            src={imgs[0]}
            alt="게시글 사진1"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative -z-10">
          <Image
            src={imgs[0]}
            alt="게시글 사진2"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative -z-10">
          <Image
            src={imgs[0]}
            alt="게시글 사진3"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    );
  }
  return null;
}
