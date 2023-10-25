/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import Image from 'next/image';
import { useState } from 'react';
import CaretLeft from '@/public/svgs/CaretLeft.svg';
import CaretRight from '@/public/svgs/CaretRight.svg';
import { useRouter } from 'next/navigation';
import FlexBox from '../../FlexBox';
import Divider from '../../Divider';
import Images from './Images';

export default function BoardCardContent({
  children,
  type,
  boardId,
  content,
  imgs,
}: {
  children: React.ReactNode;
  type: 'mainPC' | 'modal' | 'myPage' | 'id';
  boardId: number;
  content: string;
  imgs: string[];
}) {
  const router = useRouter();

  const [imgNum, setImgNum] = useState(0);
  const downImgNum = () => {
    if (imgNum - 1 >= 0) {
      setImgNum(imgNum - 1);
    } else {
      setImgNum(imgNum);
    }
  };
  const upImgNum = () => {
    if (imgs && imgNum + 1 < imgs?.length) {
      setImgNum(imgNum + 1);
    } else {
      setImgNum(imgNum);
    }
  };

  const renderBoardContent = () => (
    <FlexBox
      direction="column"
      align="start"
      className={`${
        (type === 'mainPC' || type === 'myPage' || type === 'id') && 'w-full'
      } ${type === 'modal' && 'w-[375px] h-full'} gap-3`}
    >
      <div
        className={`body3 text-grey-800 w-full ${
          type === 'mainPC' ? 'max-h-40' : null
        } ${
          type === 'mainPC' || type === 'myPage' ? 'hover:cursor-pointer' : null
        }`}
        onClick={() =>
          type === 'mainPC' || type === 'myPage'
            ? router.push(`board/${boardId}`)
            : null
        }
      >
        {content}
      </div>
      <Divider type="horizontal" />
      {children}
    </FlexBox>
  );

  if (imgs?.length > 0) {
    // 이미지가 있는 경우
    return (
      // eslint-disable-next-line react/jsx-no-useless-fragment
      <>
        {type === 'mainPC' && (
          <div className="grid w-full h-full grid-cols-2 gap-9">
            <Images boardId={boardId} imgs={imgs} />
            {renderBoardContent()}
          </div>
        )}

        {(type === 'modal' || type === 'id') && (
          <FlexBox className="w-full gap-9">
            <div className="relative w-full h-[574px]">
              <Image
                src={imgs[imgNum]}
                alt="게시글 사진"
                layout="fill"
                objectFit="cover"
                className="rounded-[20px]"
              />
              <FlexBox className="absolute top-1/2 left-3 bg-white/50 rounded-[20px]">
                <button type="button" onClick={downImgNum}>
                  <CaretLeft className="w-6 h-6 fill-grey-400 hover:fill-white" />
                </button>
              </FlexBox>
              <FlexBox className="absolute top-1/2 right-3 bg-white/50 rounded-[20px]">
                <button type="button" onClick={upImgNum}>
                  <CaretRight className="w-6 h-6 fill-grey-400 hover:fill-white" />
                </button>
              </FlexBox>
            </div>
            {renderBoardContent()}
          </FlexBox>
        )}

        {type === 'myPage' && (
          <div
            className="grid w-full h-full grid-rows-2 gap-9"
            onClick={() => router.push(`/board/${boardId}`)}
          >
            <Images boardId={boardId} imgs={imgs} />
            {renderBoardContent()}
          </div>
        )}
      </>
    );
  }
  return renderBoardContent(); // 이미지가 없는 경우 게시글 내용만 렌더
}
