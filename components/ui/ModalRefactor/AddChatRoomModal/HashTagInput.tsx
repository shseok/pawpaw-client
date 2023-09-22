/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { ChangeEvent, Dispatch, KeyboardEvent, SetStateAction } from 'react';
import Tag from '../../Tag';

interface HashTagInputProps {
  tagList: string[];
  tag: string;
  setTagList: Dispatch<SetStateAction<string[]>>;
  onChangeTag: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  reset: () => void;
}

export default function HashTagInput({
  tagList,
  tag,
  setTagList,
  reset,
  onChangeTag,
}: HashTagInputProps) {
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
        reset();
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
  const isHashTagNumOver = tagList.length > 10;
  return (
    <div className="flex flex-wrap items-center w-full ">
      <div className="flex flex-wrap items-center flex-1 gap-2 overflow-auto max-h-20">
        {tagList.map((tagItem) => (
          <div
            key={tagItem}
            onClick={() => removeTagByName(tagItem)}
            className="cursor-pointer animate-scaleUp"
          >
            <Tag tagName={tagItem} />
          </div>
        ))}
        <input
          type="text"
          onChange={onChangeTag}
          className="p-0 border-none w-80 tablet:w-96 focus:ring-0 body1"
          placeholder="#해시태그를 이용해서 채팅방을 소개해 보세요"
          value={tag}
          onKeyUp={addTagByEnter}
          onKeyDown={removeTagByBackspace}
        />
      </div>
      <div
        className={`caption2 ${
          isHashTagNumOver ? 'text-red' : 'text-grey-400'
        }`}
      >
        {tagList.length}/10
      </div>
    </div>
  );
}
