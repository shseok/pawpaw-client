import { ChangeEvent } from 'react';

interface DescriptionInputProps {
  description: string;
  onChangeDescription: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

export default function DescriptionInput({
  description,
  onChangeDescription,
}: DescriptionInputProps) {
  const isDescriptionOver = description.length > 30;
  return (
    <div className="flex">
      <input
        placeholder="채팅방에 대해 소개해 주세요"
        className="w-full p-0 border-none body1 focus:ring-0 text-grey-500"
        value={description}
        onChange={onChangeDescription}
        type="text"
      />
      <div
        className={`caption2 ${
          isDescriptionOver ? 'text-red' : 'text-grey-400'
        }`}
      >
        {description.length}/30
      </div>
    </div>
  );
}
