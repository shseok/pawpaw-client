import FlexBox from "../../FlexBox";
import Image from "next/image";

export default function PostContent({
  children,
  content,
}: {
  children: React.ReactNode;
  content: string;
}) {
  return (
    <FlexBox className="gap-[36px]">
      <Image
        src={`Feed/desktop/tempPostPic/tempPostPic3.svg`}
        alt="게시글 사진1"
        width={545}
        height={260}
      />
      <FlexBox
        direction="column"
        align="start"
        className="w-[375px] gap-[12px]"
      >
        <div className="text-[16px]">{content}</div>
        <Image
          src="/Feed/desktop/breakLine.svg"
          alt="break line"
          width={375}
          height={1}
        />
        {children}
      </FlexBox>
    </FlexBox>
  );
}
