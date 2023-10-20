'use client';

import { useEffect, useState } from 'react';
import usePostBoard from '@/hooks/mutations/usePostBoard';
import useImageUpload from '@/hooks/common/useImageUpload';
import Image from 'next/image';
import Avatar from '../../../../ui/Avatar';
import Button from '../../../../ui/Button';
import FlexBox from '../../../../ui/FlexBox';

export default function Upload({
  userImage,
  nickname,
}: {
  userImage: string | undefined;
  nickname: string | undefined;
}) {
  const [postText, setPostText] = useState('');
  const { mutate: postBoard, isLoading, isSuccess } = usePostBoard(postText);
  const { handleImageUpload, imageFile, imagePreview } = useImageUpload();

  const maxCharacters = 100;
  const isOverMaxChar = postText.length > maxCharacters;

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostText(event.target.value);
  };
  useEffect(() => {
    if (isSuccess) setPostText('');
  }, [isSuccess]);

  return (
    <form className="flex flex-col bg-primary-50 p-5 border-[1px] border-primary-300 rounded-[10px] w-full">
      <FlexBox justify="between" className="w-full gap-[24px]">
        <Avatar
          size="xxl"
          image={userImage}
          name={nickname ?? '로그인하세요'}
        />
        <div className="relative w-full">
          <textarea
            className="bg-primary-50 w-full h-[77px] resize-none header4 text-grey-500 placeholder:text-grey-300 border-none focus:ring-primary-300"
            placeholder="동네 주민들에게 즐거운 소식을 전해보세요!"
            value={postText}
            onChange={handleTextChange}
          />
          {isOverMaxChar ? (
            <FlexBox className="caption2 h-[36px] absolute bottom-0 right-0 bg-primary-50/80 z-10">
              <span className="text-red">{postText.length}</span>
              <span className="text-grey-200">/</span>
              <span className="text-grey-500">{maxCharacters}</span>
            </FlexBox>
          ) : null}
        </div>
      </FlexBox>
      {imagePreview && (
        <div className="relative w-full m-5 h-60 ">
          <Image
            fill
            priority
            alt="image"
            src={imagePreview}
            className="rounded-[10px] object-contain"
          />
        </div>
      )}
      <FlexBox justify="end" className="gap-[10px] w-full">
        <label
          htmlFor="image"
          className="rounded-[10px] h-[54px] w-40 p-2.5 bg-white border border-primary-200 text-primary-200 hover:border-primary-300 hover:text-primary-300 cursor-pointer text-center"
        >
          <div className="flex flex-col items-center justify-center w-full h-full">
            파일
          </div>
          <input
            type="file"
            id="image"
            onChange={handleImageUpload}
            className="hidden"
            accept="image/*"
          />
        </label>
        <Button
          size="lg"
          disabled={postText.length === 0 || isOverMaxChar || isLoading}
          className="w-40"
          onClickAction={() => postBoard()}
        >
          {isLoading ? '업로드 중입니다' : '업로드'}
        </Button>
      </FlexBox>
    </form>
  );
}
