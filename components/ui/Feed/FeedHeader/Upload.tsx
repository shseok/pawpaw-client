'use client';

import { useState } from 'react';
import Avatar from '../../Avatar';
import Button from '../../Button';
import FlexBox from '../../FlexBox';

export default function Upload() {
  const [postText, setPostText] = useState('');
  const maxCharacters = 100;
  const isOverMaxChar = postText.length > maxCharacters;

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostText(event.target.value);
  };

  return (
    <FlexBox
      direction="column"
      className="bg-primary-50 p-5 border-[1px] border-primary-300 rounded-[10px] w-full"
    >
      <FlexBox justify="between" className="w-full gap-[24px]">
        <Avatar
          size="xxl"
          image="/Feed/desktop/tempUserProfilePic.svg"
          name="수박이"
        />
        <div className="relative w-full">
          <textarea
            className="bg-primary-50 w-full h-[77px] resize-none header4 text-grey-500 placeholder:text-grey-300"
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
      <FlexBox justify="end" className="gap-[10px] w-full">
        <Button size="lg" variant="secondary" disabled={isOverMaxChar}>
          파일
        </Button>
        <Button size="lg" disabled={isOverMaxChar}>
          업로드
        </Button>
        <div className="mt-4" id="renderedText" />
      </FlexBox>
    </FlexBox>
  );
}
