import Image from 'next/image';
import { ChangeEvent } from 'react';
import CameraIcon from '@/public/Camera.svg';

interface ImageDisplayProps {
  image?: string;
  onChangeImage: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function ImageDisplay({
  image,
  onChangeImage,
}: ImageDisplayProps) {
  return (
    <label
      htmlFor="image"
      className="relative flex-1 border h-64 rounded-[10px] flex justify-center items-center cursor-pointer"
    >
      <div className="flex flex-col items-center gap-2">
        <CameraIcon className="w-20 h-20" />
        <p className="text-grey-400 header3">커버이미지를 업로드 해주세요.</p>
      </div>

      {image && (
        <Image
          fill
          priority
          alt="image"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src={image}
          className="absolute object-fill rounded-[10px]"
        />
      )}
      <input
        type="file"
        id="image"
        onChange={onChangeImage}
        className="hidden"
        accept="image/*"
      />
    </label>
  );
}
