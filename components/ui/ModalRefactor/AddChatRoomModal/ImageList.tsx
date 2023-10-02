import { ChangeEvent } from 'react';
import Image from 'next/image';
import CameraIcon from '@/public/Camera.svg';
import CaretLeftIcon from '@/public/CaretLeft.svg';
import CaretRightIcon from '@/public/CaretRight.svg';
import useGetCoverImageList from '@/hooks/queries/useGetCoverImageLIst';

interface ImageListProps {
  onChangeImage: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function ImageList({ onChangeImage }: ImageListProps) {
  const { data: coverImageList } = useGetCoverImageList();

  return (
    <div className="flex-col flex-1 hidden gap-3 tablet:flex">
      <div className="flex justify-between">
        <span className="text-grey-600 body3">커버선택</span>
        <div className="flex items-center gap-2">
          <span className="caption2 text-grey-500">1 / 2</span>
          <div className="border divide-x rounded-[10px]">
            <button
              type="button"
              // onClick={onPrevImageList}
              className="p-2 rounded-l-[10px] hover:bg-gray-100 active:bg-grey-200"
            >
              <CaretLeftIcon className="w-[14px] h-[14px]" />
            </button>
            <button
              type="button"
              // onClick={onNetxImageList}
              className="p-2 rounded-r-[10px] hover:bg-gray-100 active:bg-grey-200"
            >
              <CaretRightIcon className="w-[14px] h-[14px]" />
            </button>
          </div>
        </div>
      </div>
      <ul className="grid grid-cols-4 gap-2 ">
        <li>
          <label
            className="flex flex-col items-center justify-center w-full h-24 rounded-md cursor-pointer bg-grey-200"
            htmlFor="imageUpload"
          >
            <input
              type="file"
              className="hidden"
              id="imageUpload"
              onChange={(event) => onChangeImage(event)}
              accept="image/*"
            />
            <CameraIcon />
            <span className="capion1 text-grey-400">사진추가</span>
          </label>
        </li>
        {coverImageList?.map((img) => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
          <li key={img.id} className="cursor-pointer">
            <Image
              src={img.coverUrl}
              alt=""
              width={120}
              height={90}
              className="h-24 duration-150 rounded-md w-30 hover:scale-105"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
