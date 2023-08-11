import Image from 'next/image';
import FlexBox from '../../FlexBox';

export default function PostComment({
  children,
  commentsNum,
}: {
  children: React.ReactNode;
  commentsNum: number;
}) {
  return (
    <FlexBox direction="column" align="start" className="w-full gap-[12px]">
      <FlexBox className="gap-[20px]">
        <FlexBox className="gap-[8px]">
          <div>댓글</div>
          <div>{commentsNum}</div>
        </FlexBox>
        <FlexBox className="gap-[8px]">
          <div>좋아요</div>
          <div>2</div>
        </FlexBox>
      </FlexBox>
      <FlexBox direction="row" className="gap-[19px] pl-[15px]">
        <Image
          src="/Feed/desktop/commentLine.svg"
          alt="댓글선"
          width={1}
          height={53}
        />
        {children}
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
          className="border rounded-[10px] py-[16px] px-[20px] w-full"
        />
      </FlexBox>
    </FlexBox>
  );
}
