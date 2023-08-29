import Image from 'next/image';
import FlexBox from '../../FlexBox';
import Devider from '../../Divider';

export default function PostContent({
  children,
  content,
  img,
}: {
  children: React.ReactNode;
  content: string;
  img: string;
}) {
  return (
    <FlexBox align="stretch" className="gap-[36px] h-full">
      <div className="w-[303px] mobile:w-[352px] tablet:w-[530px] pc:w-[545px] grid grid-cols-2 place-content-stretch">
        <div className="relative row-span-2 -z-10">
          <Image src={img} alt="게시글 사진1" layout="fill" objectFit="cover" />
        </div>
        <div className="relative -z-10">
          <Image src={img} alt="게시글 사진1" layout="fill" objectFit="cover" />
        </div>
        <div className="relative -z-10">
          <Image src={img} alt="게시글 사진1" layout="fill" objectFit="cover" />
        </div>
      </div>
      <FlexBox
        direction="column"
        align="start"
        className="w-[375px] gap-[12px]"
      >
        <div className="overflow-hidden body3 text-grey-800 max-h-40">
          {content}
        </div>
        <Devider type="horizontal" />
        {children}
      </FlexBox>
    </FlexBox>
  );
}
