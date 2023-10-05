/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Image from 'next/image';

export default function PostCardImages({
  imgs,
  onClickModal,
}: {
  imgs: string[];
  onClickModal?: () => void;
}) {
  if (imgs) {
    return (
      <div
        className="grid w-full grid-cols-2 place-content-stretch"
        onClick={onClickModal}
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
