import { ModalProps } from '@/types/types';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { uploadChatImage } from '@/service/chatRoom';
import { useState } from 'react';
import LoadingIcon from '@/public/loading.svg';
import prettyBytes from 'pretty-bytes';
import Toast from '@/utils/notification';
import Modal from '..';
import Button from '../../Button';

interface ImageUploadModalProps extends ModalProps {
  imageFile: File | undefined;
}

export default function ImageUploadModal({
  open,
  onClose,
  imageFile,
}: ImageUploadModalProps) {
  const roomId = usePathname().split('/')[2];
  const [isLoading, setIsLoading] = useState(false);

  const handleUploadImage = async () => {
    try {
      if (imageFile) {
        setIsLoading(true);
        await uploadChatImage(roomId, imageFile);
      }
    } catch (error) {
      if (error instanceof Error) Toast.error(error.message);
    } finally {
      setIsLoading(false);
      onClose();
    }
  };
  return (
    <Modal open={open} onClose={onClose}>
      <div className="flex flex-col h-auto gap-3 p-4 bg-white rounded-lg w-80">
        <p className="text-center header4 ">이미지 전송</p>
        <div className="flex gap-2">
          {imageFile && (
            <Image
              alt={imageFile.name}
              src={URL.createObjectURL(imageFile)}
              width={100}
              height={100}
              className="w-12 h-12 rounded-md shadow-md"
            />
          )}

          <div className="flex flex-col justify-between">
            <span>{imageFile?.name}</span>
            <span className="text-gray-400 caption2">
              {imageFile &&
                prettyBytes(imageFile.size, {
                  locale: 'ko',
                })}
            </span>
          </div>
        </div>
        <div className="flex w-full gap-2">
          <Button
            fullWidth
            variant="secondary"
            size="xs"
            onClickAction={onClose}
          >
            취소
          </Button>
          <Button size="xs" fullWidth onClickAction={handleUploadImage}>
            <span className="flex justify-center">
              {isLoading ? <LoadingIcon className="animate-spin" /> : '전송'}
            </span>
          </Button>
        </div>
      </div>
    </Modal>
  );
}
