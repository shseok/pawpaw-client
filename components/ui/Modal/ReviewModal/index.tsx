'use client';

import { useState } from 'react';
import { ModalProps } from '@/types/types';
import X from '@/public/svgs/X.svg';
import Star from '@/public/svgs/Pawzone/star.svg';
import Camera from '@/public/svgs/Camera.svg';
import { Button, Modal } from '../../ui';
import { cn } from '@/utils/common';
import { MAX_STAR_NUM, REVIEW_KEYWORDS } from '@/constant/place';
import useInput from '@/hooks/common/useInput';
import useImageUpload from '@/hooks/common/useImageUpload';
import Image from 'next/image';

export default function ReviewModal({ open, onClose }: ModalProps) {
  const [starNum, setStarNum] = useState(0);
  const [text, onChangeValue] = useInput('');
  const {
    handleImageUpload,
    imageFile: images,
    imagePreview: previews,
  } = useImageUpload({ option: 'multiple' });
  return (
    <Modal open={open} onClose={onClose}>
      <div className="flex flex-col max-w-[440px] h-screen py-[44px]">
        <div className="self-end">
          <button type="button" onClick={onClose}>
            <X className="w-8 h-8 fill-white" />
          </button>
        </div>
        <div className="flex flex-col h-full gap-7 bg-white p-9 rounded-[10px] overflow-y-auto">
          <header className="flex items-center py-2">
            <span className="flex-1 header2 text-grey-800">리뷰 작성</span>
          </header>
          {/* STAR SECITON */}
          <div>
            <p className="body1 text-grey-600">{`별점 (${starNum}/5)`}</p>
            <div className="flex gap-3">
              {Array.from({ length: MAX_STAR_NUM }).map((_, index) => (
                <button type="button" onClick={() => setStarNum(index + 1)}>
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
              {REVIEW_KEYWORDS.map(({ text, emoji }) => (
                <Button variant="ghost">
                  <span className="body2 text-grey-800 gap-3">{`${text} ${emoji}`}</span>
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
                {previews.map((preview) => (
                  <div className="relative w-[100px] h-[100px]">
                    <Image
                      src={preview}
                      alt="test"
                      fill
                      priority
                      sizes="100vw"
                      className="object-cover rounded-[10px]"
                    />
                  </div>
                ))}
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
            <Button variant="secondary" fullWidth onClickAction={onClose}>
              취소
            </Button>
            <Button fullWidth onClickAction={onClose}>
              등록
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
