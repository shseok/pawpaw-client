'use client';

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import { KeyboardEvent, useState } from 'react';
import { ModalProps } from '@/types/types';
import useInput from '@/hooks/common/useInput';
import Modal from '../../Modal';
import Divider from '../../Divider';
import Tag from '../../Tag';

export default function AddChatRoomModal({ open, onClose }: ModalProps) {
  const [title, onChangeTitle] = useInput('');
  const [description, onChangeDescription] = useInput('');
  const [tag, onChangeTag, resetTag] = useInput('');
  const [tagList, setTagList] = useState<string[]>([]);

  const removeTagByName = (name: string) => {
    const filteredTagList = tagList.filter((tagName) => tagName !== name);
    setTagList(filteredTagList);
  };

  const addTagByEnter = (event: KeyboardEvent) => {
    const isDuplicateTag = !tagList.includes(tag);
    const isNonEmptyTag = tag.trim() !== '';
    if (event.key === 'Enter') {
      if (isDuplicateTag && isNonEmptyTag) {
        setTagList([...tagList, tag]);
        resetTag();
      }
    }
  };

  const removeTagByBackspace = (event: KeyboardEvent) => {
    const isTagListNotEmpty = tagList.length >= 1;
    const isTagValueEmpty = tag.length === 0;
    if (event.key === 'Backspace' && isTagListNotEmpty && isTagValueEmpty) {
      const lastTag = tagList.at(-1);
      const removedTagList = tagList.filter((tagName) => tagName !== lastTag);
      setTagList(removedTagList);
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className="flex flex-col w-screen tablet:w-[1028px] h-screen tablet:h-[720px] bg-white p-9 tablet:rounded-[10px]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <input
              placeholder="공개채팅방 이름을 입력해 주세요."
              className="w-full p-0 border-none header3 focus:ring-0 text-grey-500"
              value={title}
              onChange={onChangeTitle}
              type="text"
            />
            <Divider type="horizontal" />
          </div>
          <div className="flex flex-col gap-3">
            <input
              placeholder="채팅방에 대해 소개해 주세요"
              className="w-full p-0 border-none body1 focus:ring-0 text-grey-500"
              value={description}
              onChange={onChangeDescription}
              type="text"
            />
            <div className="flex flex-wrap items-center w-full ">
              <ul className="flex flex-wrap items-center flex-1 gap-2">
                {tagList.map((tagItem) => (
                  <div
                    key={tagItem}
                    onClick={() => removeTagByName(tagItem)}
                    className="cursor-pointer animate-bounce"
                  >
                    <Tag tagName={tagItem} />
                  </div>
                ))}
                <input
                  type="text"
                  onChange={onChangeTag}
                  className="p-0 border-none w-80 focus:ring-0"
                  placeholder="#해시태그를 이용해서 채팅방을 소개해 보세요"
                  value={tag}
                  onKeyUp={addTagByEnter}
                  onKeyDown={removeTagByBackspace}
                />
              </ul>
              <div className="caption2 text-grey-200">{tagList.length}/10</div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
