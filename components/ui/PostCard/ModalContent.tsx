import Image from 'next/image';
import Divider from '../Divider';
import FlexBox from '../FlexBox';

export default function PostCardModalContent({
  imgs,
  content,
  children,
}: {
  children: React.ReactNode;
  imgs?: string[];
  content: string;
}) {
  function renderModalPostContent() {
    return (
      <FlexBox
        direction="column"
        align="start"
        className="w-[375px] gap-3 h-full"
      >
        <div className="body3 text-grey-800">{content}</div>
        <Divider type="horizontal" />
        {children}
      </FlexBox>
    );
  }
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {imgs ? (
        <FlexBox className="gap-9">
          <div className="relative w-[545px] h-[574px]">
            {imgs?.map((image) => (
              <Image
                src={image}
                alt="게시글 사진"
                layout="fill"
                objectFit="cover"
                className="rounded-[20px]"
              />
            ))}
          </div>
          {renderModalPostContent()}
        </FlexBox>
      ) : (
        renderModalPostContent()
      )}
    </>
  );
}
