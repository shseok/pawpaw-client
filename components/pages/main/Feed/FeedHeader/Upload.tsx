'use client';

import { useState } from 'react';
import Toast from '@/utils/notification';
import { postBoard } from '@/service/board';
import Avatar from '../../../../ui/Avatar';
import Button from '../../../../ui/Button';
import FlexBox from '../../../../ui/FlexBox';

export default function Upload() {
  const [postText, setPostText] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const maxCharacters = 100;
  const isOverMaxChar = postText.length > maxCharacters;

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostText(event.target.value);
  };

  // 데이터 전송을 위한 함수
  const onUploadBoard = async () => {
    if (!postText || isOverMaxChar) {
      return;
    }
    setIsUploading(true);
    try {
      const response = await postBoard({
        title: 'title',
        content: postText,
      });
      if (response.content) {
        Toast.success('게시물이 성공적으로 업로드되었습니다.');
        setPostText('');
      } else {
        Toast.error('업로드에 실패했습니다. 잠시 후 다시 시도해주세요.');
      }
    } catch (error) {
      Toast.error('오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <form className="flex flex-col bg-primary-50 p-5 border-[1px] border-primary-300 rounded-[10px] w-full">
      <FlexBox justify="between" className="w-full gap-[24px]">
        <Avatar
          size="xxl"
          image="/Feed/desktop/tempUserProfilePic.svg"
          name="수박이"
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
      <FlexBox justify="end" className="gap-[10px] w-full">
        <Button
          size="lg"
          variant="secondary"
          disabled={isOverMaxChar}
          className="w-40"
          onClickAction={() => Toast.error('실패')}
        >
          파일
        </Button>
        {isUploading ? (
          <div>업로드 중입니다</div>
        ) : (
          <Button
            size="lg"
            disabled={isOverMaxChar}
            className="w-40"
            onClickAction={() => onUploadBoard()}
          >
            업로드
          </Button>
        )}
        <div className="mt-4" id="renderedText" />
      </FlexBox>
    </form>
  );
}
