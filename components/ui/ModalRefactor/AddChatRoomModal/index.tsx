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

export default function AddChatRoomModal({ open, onClose }: ModalProps) {
  const [title, onChangeTitle] = useInput('');
  const [description, onChangeDescription] = useInput('');
  const [tag, onChangeTag, resetTag] = useInput('');
  const [tagList, setTagList] = useState<string[]>([]);
  return (
    <Modal open={open} onClose={onClose}>
      <div className="flex flex-col w-screen tablet:w-[1028px] h-screen tablet:h-[720px]">
        <div className="self-end hidden tablet:block">
          <button type="button" onClick={onClose}>
            <XIcon className="w-8 h-8" />
          </button>
        </div>
        <div className="flex flex-col h-full gap-6 bg-white p-9 tablet:rounded-[10px]">
          <header className="flex items-center tablet:hidden">
            <button type="button" onClick={onClose}>
              <ArrowLeftIcon className="w-6 h-6" />
            </button>
            <span className="flex-1 text-center body1">공개 채팅방 만들기</span>
          </header>
          <TitleInput title={title} onChangeTitle={onChangeTitle} />
          <div className="flex flex-col gap-3 ">
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
      </div>
    </Modal>
  );
}
