'use client';

import { useState } from 'react';
import { ModalProps, Review } from '@/types/types';
import X from '@/public/svgs/X.svg';
import Star from '@/public/svgs/Pawzone/star.svg';
import Camera from '@/public/svgs/Camera.svg';
import LoadingIcon from '@/public/svgs/loading.svg';
import { Button, Modal } from '../../ui';
import { cn } from '@/utils/common';
import { MAX_STAR_NUM, REVIEW_KEYWORDS } from '@/constant/place';
import useInput from '@/hooks/common/useInput';
import useImageUpload from '@/hooks/common/useImageUpload';
import ImageSlider from '@/app/(main)/pawzone/_components/Place/ImageSlider';
import useMutateReview from '@/hooks/mutations/useMutateReview';
import { useParams } from 'next/navigation';

interface Props extends ModalProps {
  myInfo: Review | null;
}

const defaultInfo = {
  score: 0,
  content: '',
  accessible: false,
  quiet: false,
  safe: false,
  scenic: false,
  clean: false,
  comfortable: false,
};

export default function ReviewModal({ open, onClose, myInfo }: Props) {
  const initInfo = myInfo
    ? {
        score: myInfo.score,
        content: myInfo.content,
        accessible: myInfo.accessible,
        quiet: myInfo.quiet,
        safe: myInfo.safe,
        scenic: myInfo.scenic,
        clean: myInfo.clean,
        comfortable: myInfo.comfortable,
      }
    : defaultInfo;
  console.log(initInfo);
  const [starNum, setStarNum] = useState(initInfo.score);
  const [text, onChangeValue] = useInput(initInfo.content);
  const [checkKeywords, setCheckKeywords] = useState([
    initInfo.scenic,
    initInfo.quiet,
    initInfo.comfortable,
    initInfo.accessible,
    initInfo.clean,
    initInfo.safe,
  ]);
  const {
    imageFile: images,
    imagePreview: previews,
    setImageFile: setImageFiles,
    setImagePreview: setImagePreviews,
    handleImageUpload,
    handleImageDelete,
  } = useImageUpload({ option: 'multiple' });
  const params = useParams();
  const { mutate: mutateReview, isLoading } = useMutateReview({
    closeModal: onClose,
    placeId: parseInt(params.placeId as string),
  });
  const initState = () => {
    setImageFiles([]);
    setImagePreviews([]);
    setStarNum(0);
    setCheckKeywords(
      Array.from({ length: REVIEW_KEYWORDS.length }, () => false),
    );
  };
  const cancel = () => {
    console.log('리뷰 취소');
    initState();
    onClose();
  };
  const register = () => {
    console.log('리뷰 등록', images, text, starNum, checkKeywords);
    mutateReview({
      score: starNum,
      content: text,
      scenic: checkKeywords[0],
      quiet: checkKeywords[1],
      clean: checkKeywords[4],
      comfortable: checkKeywords[2],
      safe: checkKeywords[5],
      accessible: checkKeywords[3],
      images,
    });
    initState();
  };
  return (
    <Modal open={open} onClose={onClose} isClickableOverlay={false}>
      <div className="flex flex-col max-w-[440px] h-screen py-[44px]">
        <div className="self-end">
          <button type="button" onClick={onClose}>
            <X className="w-8 h-8 fill-white" />
          </button>
        </div>
        <div className="flex flex-col h-full gap-7 bg-white p-9 rounded-[10px] overflow-y-auto overflow-x-hidden">
          <header className="flex items-center py-2">
            <span className="flex-1 header2 text-grey-800">리뷰 작성</span>
          </header>
          {/* STAR SECITON */}
          <div>
            <p className="body1 text-grey-600">{`별점 (${starNum}/5)`}</p>
            <div className="flex gap-3 justify-center">
              {Array.from({ length: MAX_STAR_NUM }).map((_, index) => (
                <button
                  type="button"
                  onClick={() => setStarNum(index + 1)}
                  key={index}
                >
                  <Star
                    className={cn(
                      'w-10 h-10 fill-grey-200',
                      starNum > index ? 'fill-yellow-100' : null,
                    )}
                  />
                </button>
              ))}
            </div>
          </div>
          {/* TAG SECTION */}
          <div className="flex flex-col gap-4">
            <p className="body1 text-grey-600">이 장소가 어떠셨나요?</p>
            <div className="flex flex-wrap gap-3">
              {REVIEW_KEYWORDS.map(({ text, emoji }, index) => (
                <Button
                  variant="ghost"
                  onClickAction={() =>
                    setCheckKeywords((prev) => {
                      const temp = [...prev];
                      temp[index] = !prev[index];
                      return temp;
                    })
                  }
                  className={checkKeywords[index] ? 'bg-primary-50' : ''}
                  key={index}
                >
                  <p
                    className={cn(
                      'flex body2 text-grey-800 gap-1 items-center',
                      checkKeywords[index] && 'text-primary-200',
                    )}
                  >
                    <span>{text}</span>
                    <span>{emoji}</span>
                  </p>
                </Button>
              ))}
            </div>
          </div>
          {/* REVIEW SECTION */}
          <div className="flex flex-col gap-4">
            <p className="body1 text-grey-600">리뷰</p>
            <label
              htmlFor="review-image"
              className="flex items-center justify-center gap-1 cursor-pointer bg-white border border-grey-200 text-primary-800 hover:border-grey-200 hover:bg-primary-50 rounded-[10px] py-2"
            >
              <Camera className="w-4 h-4" />
              <p className="body2 text-grey-800">
                사진 첨부하기{' '}
                <span className="caption2 text-grey-500">{`(최대 5장)`}</span>
              </p>
              <input
                type="file"
                id="review-image"
                onChange={handleImageUpload}
                className="hidden"
                accept="image/*"
                multiple
              />
            </label>
            {previews && (
              <div className="flex gap-2 ">
                <ImageSlider
                  urls={previews}
                  isDeletableImage
                  deleteImage={handleImageDelete}
                  wrapperClassName="w-[100px] h-[100px]"
                  className="rounded-none"
                />
              </div>
            )}
            <textarea
              onChange={onChangeValue}
              value={text}
              placeholder="다른 사용자들에게 도움이 되도록 장소에 대한 솔직한 리뷰를 작성해주세요."
              // className="bg-primary-50 w-full h-[77px] resize-none header4 text-grey-500 placeholder:text-grey-300 border-none focus:ring-primary-300"
              className="w-full py-4 px-5 rounded-[10px] border outline-none border-grey-200 focus:ring-0 focus:border-grey-200 scrollbar-hide h-[240px] resize-none"
            />
          </div>
          {/* BUTTON SECTION */}
          <div className="flex gap-3">
            <Button variant="secondary" fullWidth onClickAction={cancel}>
              취소
            </Button>
            <Button
              fullWidth
              onClickAction={register}
              className="flex justify-center"
            >
              {isLoading ? (
                <LoadingIcon className="w-5 h-5 animate-spin" />
              ) : (
                '등록'
              )}
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
