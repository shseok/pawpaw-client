'use client';

import { useState } from 'react';
import { ModalProps } from '@/types/types';
import useInput from '@/hooks/common/useInput';
import Modal from '../../Modal';
import Divider from '../../Divider';
import TagList from '../../TagList';

export default function AddChatRoomModal({ open, onClose }: ModalProps) {
  const [title, onChangeTitle] = useInput('');
  const [description, onChangeDescription] = useInput('');
  const [tag, onChangeTag, reset] = useInput('');
  const [tagList, setTagList] = useState<string[]>([]);
  console.log('tagList', tagList);

  return (
    <Modal open={open} onClose={onClose}>
      <div className="flex flex-col w-screen tablet:w-[1028px] h-screen tablet:h-[720px] bg-white p-9 tablet:rounded-[10px]">
        <div className="flex flex-col">
          <div className="flex flex-col gap-3">
            <input
              placeholder="공개채팅방 이름을 입력해 주세요."
              className="w-full border-none header3 focus:ring-0 text-grey-500"
              value={title}
              onChange={onChangeTitle}
              type="text"
            />
            <Divider type="horizontal" />
          </div>
          <div className="flex flex-col gap-3">
            <input
              placeholder="채팅방에 대해 소개해 주세요"
              className="w-full border-none body1 focus:ring-0 text-grey-500"
              value={description}
              onChange={onChangeDescription}
              type="text"
            />
            <div className="w-full">
              <input
                type="text"
                onChange={onChangeTag}
                className="w-full border-none"
                placeholder="#해시태그를 이용해서 채팅방을 소개해 보세요"
                value={tag}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    setTagList([...tagList, tag]);
                    reset();
                  }
                }}
              />
              <TagList list={tagList} />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
