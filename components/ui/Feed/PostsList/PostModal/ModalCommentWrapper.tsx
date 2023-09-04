import Image from 'next/image';
import FlexBox from '../../../FlexBox';

export default function ModalCommentWrapper({
  children,
  commentsNum,
}: {
  children: React.ReactNode;
  commentsNum: number;
}) {
  return (
    <FlexBox
      direction="column"
      align="start"
      justify="between"
      className="w-full h-full"
    >
      <FlexBox direction="column" align="start" className="gap-3">
        <FlexBox className="gap-5">
          <FlexBox className="gap-2 body3 text-grey-500">
            <div>댓글</div>
            <div>{commentsNum}</div>
          </FlexBox>
          <FlexBox className="gap-2 body3 text-grey-500">
            <div>좋아요</div>
            <div>2</div>
          </FlexBox>
        </FlexBox>
        <FlexBox
          direction="column"
          justify="between"
          className="gap-[5px] overflow-scroll"
        >
          {children}
        </FlexBox>
      </FlexBox>
      <FlexBox className="gap-[9px] w-full">
        <Image
          src="/Feed/desktop/like.svg"
          alt="좋아요"
          width={24}
          height={24}
        />
        <input
          type="text"
          placeholder="댓글로 이웃과 소통해보세요!"
          className="border rounded-[10px] py-[16px] px-[20px] w-full body4 text-grey-400"
        />
      </FlexBox>
    </FlexBox>
  );
}
