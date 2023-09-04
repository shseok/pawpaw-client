/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Image from 'next/image';
import FlexBox from '../../FlexBox';
import Divider from '../../Divider';

export default function PostContent({
  children,
  content,
  img,
  onClickModal,
}: {
  children: React.ReactNode;
  content: string;
  img: string;
  onClickModal: () => void;
}) {
  return (
    <div className="grid grid-cols-2 gap-[36px] w-full">
      {/* 디자인에는 아래와같이 나와있는데 이대로 하면 width가 모니터보다 넘치는 경우 발생 => full로 바꿔눔 */}
      {/* <div
        className="w-[303px] mobile:w-[352px] tablet:w-[530px] pc:w-[545px] grid grid-cols-2 place-content-stretch"
        onClick={onClickModal}
      > */}
      <div
        className="grid w-full grid-cols-2 place-content-stretch"
        onClick={onClickModal}
      >
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
      <FlexBox direction="column" align="start" className="w-full gap-[12px]">
        <div
          className="overflow-hidden body3 text-grey-800 max-h-40"
          onClick={onClickModal}
        >
          {content}
        </div>
        <Divider type="horizontal" />
        {children}
      </FlexBox>
    </div>
  );
}
