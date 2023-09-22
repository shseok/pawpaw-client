'use client';

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import { useState } from 'react';
import { ModalProps } from '@/types/types';
import useInput from '@/hooks/common/useInput';
import XIcon from '@/public/X.svg';
import ArrowLeftIcon from '@/public/arrow-left.svg';
import Modal from '../../Modal';
import TitleInput from './TitleInput';
import DescriptionInput from './DescriptionInput';
import HashTagInput from './HashTagInput';
import Button from '../../Button';
import Divider from '../../Divider';
import ImageDisplay from './ImageDisplay';
import ImageList from './ImageList';

export default function AddChatRoomModal({ open, onClose }: ModalProps) {
  const [title, onChangeTitle] = useInput('');
  const [description, onChangeDescription] = useInput('');
  const [tag, onChangeTag, resetTag] = useInput('');
  const [tagList, setTagList] = useState<string[]>([]);
  const [image, setImage] = useState('/images/AddChatModal/default2.webp');
  const [isChecked, setIsChecked] = useState('');

  return (
    <Modal open={open} onClose={onClose}>
      <div className="flex flex-col w-screen tablet:w-[1028px] h-screen tablet:h-[720px] ">
        <div className="self-end hidden tablet:block">
          <button type="button" onClick={onClose}>
            <XIcon className="w-8 h-8" />
          </button>
        </div>
        <div className="flex flex-col h-full gap-3 bg-white p-9 tablet:rounded-[10px] overflow-y-auto">
          <header className="flex items-center py-2 border-b-[1px] tablet:hidden">
            <button type="button" onClick={onClose}>
              <ArrowLeftIcon className="w-6 h-6" />
            </button>
            <span className="flex-1 text-center body1">공개 채팅방 만들기</span>
          </header>

          <div className="flex flex-col order-2 gap-3 tablet:order-1">
            <TitleInput title={title} onChangeTitle={onChangeTitle} />
            <Divider type="horizontal" />
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

          <div className="flex items-center justify-between order-1 gap-4 tablet:order-2">
            <ImageDisplay image={image} />
            <ImageList setImage={setImage} />
          </div>

          <div className="flex flex-col order-3 gap-6">
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

          <div className="flex items-end h-full z-[999] w-full gap-5 order-4">
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
