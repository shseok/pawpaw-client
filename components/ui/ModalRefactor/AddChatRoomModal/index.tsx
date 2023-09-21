'use client';

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import { useState } from 'react';
import { ModalProps } from '@/types/types';
import useInput from '@/hooks/common/useInput';
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
      <div className="flex flex-col w-screen tablet:w-[1028px] h-screen tablet:h-[720px] bg-white p-9 tablet:rounded-[10px]">
        <div className="flex flex-col gap-6">
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
