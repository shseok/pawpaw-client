'use client';

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import { useState } from 'react';
import Image from 'next/image';
import { ModalProps } from '@/types/types';
import useInput from '@/hooks/common/useInput';
import XIcon from '@/public/X.svg';
import ArrowLeftIcon from '@/public/arrow-left.svg';
import CameraIcon from '@/public/Camera.svg';
import Modal from '../../Modal';
import TitleInput from './TitleInput';
import DescriptionInput from './DescriptionInput';
import HashTagInput from './HashTagInput';
import Button from '../../Button';
import Divider from '../../Divider';

const FirstImageList = [
  '/images/AddChatModal/default2.webp',
  '/images/AddChatModal/default3.webp',
  '/images/AddChatModal/default4.webp',
  '/images/AddChatModal/default5.webp',
  '/images/AddChatModal/default6.webp',
  '/images/AddChatModal/default7.webp',
  '/images/AddChatModal/default8.webp',
];
const SecondImageList = [
  '/images/AddChatModal/default9.webp',
  '/images/AddChatModal/default10.webp',
  '/images/AddChatModal/default11.webp',
  '/images/AddChatModal/default12.webp',
];

export default function AddChatRoomModal({ open, onClose }: ModalProps) {
  const [title, onChangeTitle] = useInput('');
  const [description, onChangeDescription] = useInput('');
  const [tag, onChangeTag, resetTag] = useInput('');
  const [tagList, setTagList] = useState<string[]>([]);
  const [imaegList, setImageList] = useState<string[]>(FirstImageList);
  const [image, setImage] = useState('/images/AddChatModal/default2.webp');
  const [isChecked, setIsChecked] = useState('');

  const onNetxImageList = () => {
    setImageList(SecondImageList);
  };
  const onPrevImageList = () => {
    setImageList(FirstImageList);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className="flex flex-col w-screen tablet:w-[1028px] h-screen tablet:h-[720px] ">
        <div className="self-end hidden tablet:block">
          <button type="button" onClick={onClose}>
            <XIcon className="w-8 h-8" />
          </button>
        </div>
        <div className="flex flex-col h-full gap-6 bg-white p-9 tablet:rounded-[10px] overflow-auto scrollbar-hide">
          <header className="flex items-center py-2 border-b-[1px] tablet:hidden">
            <button type="button" onClick={onClose}>
              <ArrowLeftIcon className="w-6 h-6" />
            </button>
            <span className="flex-1 text-center body1">공개 채팅방 만들기</span>
          </header>

          <div className="flex flex-col gap-3 ">
            <TitleInput title={title} onChangeTitle={onChangeTitle} />
            <Divider type="horizontal" />

            <div className="flex flex-col gap-3">
              <DescriptionInput
                description={description}
                onChangeDescription={onChangeDescription}
              />
              <HashTagInput
                onChangeTag={onChangeTag}
                reset={resetTag}
                setTagList={setTagList}
                tag={tag}
                tagList={tagList}
              />
            </div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="relative flex-1 h-40 tablet:h-60 tablet:rounded-none">
              <Image
                src={image}
                alt=""
                fill
                sizes="100vw"
                priority
                className="rounded-[10px]"
              />
              <button
                onClick={() => console.log('d')}
                type="button"
                className="absolute bottom-0 right-0 flex items-center justify-center w-12 h-12 mb-2 mr-2 rounded-full bg-grey-200 tablet:hidden"
              >
                <CameraIcon />
              </button>
            </div>
            <div className="flex-col flex-1 hidden gap-4 tablet:flex">
              <div className="flex justify-between">
                <span className="text-grey-600 body3">커버선택</span>
                <div className="flex gap-2">
                  <span className="caption2 text-grey-500">1 / 2</span>
                  <div>
                    <button type="button" onClick={onPrevImageList}>
                      이전
                    </button>
                    <button type="button" onClick={onNetxImageList}>
                      다음
                    </button>
                  </div>
                </div>
              </div>
              <ul className="grid grid-cols-4 gap-2 ">
                <li>
                  <label
                    className="flex flex-col items-center justify-center w-full h-full cursor-pointer bg-grey-200"
                    htmlFor="imageUpload"
                  >
                    <input type="file" className="hidden" id="imageUpload" />
                    <CameraIcon />
                    <span className="capion1 text-grey-400">사진추가</span>
                  </label>
                </li>
                {imaegList.map((img) => (
                  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                  <li
                    key={img}
                    onClick={() => setImage(img)}
                    className="cursor-pointer "
                  >
                    <Image
                      src={img}
                      alt=""
                      width={120}
                      height={90}
                      className="h-24 duration-150 w-30 hover:scale-105"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="option1"
                className="flex items-center gap-2 header4"
              >
                <input
                  className="w-5 h-5 checked:bg-primary-200 text-primary-200 focus:ring-primary-200"
                  type="radio"
                  id="option1"
                  checked={isChecked === '1'}
                  value="1"
                  onChange={(event) => setIsChecked(event.target.value)}
                />
                <span>지역 입장 조건 설정</span>
              </label>
              <span className="text-grey-600 body3">
                지역을 입장조건으로 설정하면, 설정된 정보가 있는 멤버만 채팅장에
                입장할 수 있습니다.
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="option2"
                className="flex items-center gap-2 header4"
              >
                <input
                  className="w-5 h-5 checked:bg-primary-200 text-primary-200 focus:ring-primary-200"
                  type="radio"
                  id="option2"
                  checked={isChecked === '2'}
                  value="2"
                  onChange={(event) => setIsChecked(event.target.value)}
                />
                <span>검색허용</span>
              </label>
              <span className="text-grey-600 body3">
                채팅방 이름 혹은 태그로 검색 할 수 있게 합니다.
              </span>
            </div>
          </div>

          <div className="flex items-end h-full z-[999] w-full gap-5 ">
            <Button variant="secondary" fullWidth onClickAction={onClose}>
              취소
            </Button>
            <Button fullWidth>확인</Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
