import Image from 'next/image';
import FlexBox from '../../../FlexBox';
import Divider from '../../../Divider';

export default function ModalContent({
  imageUrl,
  content,
  children,
}: {
  children: React.ReactNode;
  imageUrl: string;
  content: string;
}) {
  return (
    <FlexBox className="gap-9">
      <div className="relative w-[545px] h-[574px]">
        <Image
          src={imageUrl}
          alt="게시글 사진"
          layout="fill"
          objectFit="cover"
          className="rounded-[20px]"
        />
      </div>
      <FlexBox
        direction="column"
        align="start"
        className="w-[375px] gap-3 h-full"
      >
        <div className="overflow-hidden body3 text-grey-800">{content}</div>
        <Divider type="horizontal" />
        {children}
      </FlexBox>
    </FlexBox>
  );
}
