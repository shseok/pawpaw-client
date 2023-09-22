import { ChangeEvent } from 'react';

interface TitleInputProps {
  title: string;
  onChangeTitle: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

export default function TitleInput({ title, onChangeTitle }: TitleInputProps) {
  const isTitleOver = title.length > 30;
  return (
    <div className="flex items-center justify-between w-full">
      <input
        placeholder="공개채팅방 이름을 입력해 주세요."
        className="w-full p-0 border-none header3 focus:ring-0 text-grey-500"
        value={title}
        onChange={onChangeTitle}
        type="text"
      />
      <div className={`caption2 ${isTitleOver ? 'text-red' : 'text-grey-400'}`}>
        {title.length}/30
      </div>
    </div>
  );
}
