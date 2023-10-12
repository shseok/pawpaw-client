import Image from 'next/image';
import FlexBox from '../../FlexBox';

export function BoardCardCommentWrapper({
  children,
  isModal = false,
  commentsNum,
}: {
  children: React.ReactNode;
  isModal?: boolean;
  commentsNum: number;
}) {
  return (
    <FlexBox
      direction="column"
      align="stretch"
      justify="between"
      className="w-full h-full"
    >
      <FlexBox direction="column" align="start" className="w-full gap-3">
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
        {isModal ? (
          <FlexBox
            direction="column"
            justify="start"
            className="gap-[5px] overflow-scroll h-full"
          >
            {children}
          </FlexBox>
        ) : (
          <FlexBox direction="row" className="gap-[19px] pl-[15px]">
            <Image
              src="/Feed/desktop/commentLine.svg"
              alt="댓글선"
              width={1}
              height={53}
            />
            {children}
          </FlexBox>
        )}
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

export function MyPageBoardCardCommentWrapper({
  commentsNum,
}: {
  commentsNum: number;
}) {
  return (
    <FlexBox
      direction="column"
      align="stretch"
      justify="between"
      className="w-full h-full"
    >
      <FlexBox direction="column" align="start" className="w-full gap-3">
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
      </FlexBox>
    </FlexBox>
  );
}
