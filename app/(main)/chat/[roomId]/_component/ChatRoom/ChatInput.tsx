import { useRef, useEffect, ChangeEvent, useState } from 'react';
import PaperPlaneIcon from '@/public/svgs/PaperPlaneTilt.svg';
import CameraIcon from '@/public/svgs/Camera.svg';
import useImageUpload from '@/hooks/common/useImageUpload';
import ImageUploadModal from '@/components/ui/Modal/ImageUploadModal';

interface MessageInputType {
  onChangeValue: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  sendChat: () => void;
  handleOnKeyPress: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  chatText: string;
}

export default function MessageInput({
  onChangeValue,
  sendChat,
  handleOnKeyPress,
  chatText,
}: MessageInputType) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [imageUploadModalOpen, setImageUploadModalOpen] = useState(false);
  const { handleImageUpload, imageFile } = useImageUpload({ option: 'single' });
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [chatText]);
  const messageEmpty = chatText.trim().length === 0;
  const onImageSelectAndOpenModal = (event: ChangeEvent<HTMLInputElement>) => {
    const image = event;
    try {
      handleImageUpload(image);
      setImageUploadModalOpen(true);
      image.target.value = '';
    } catch (error) {
      setImageUploadModalOpen(false);
      console.log('error', error);
    }
  };

  return (
    <div className="relative flex items-center w-full px-8 mb-6">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="uploadImage" className="absolute cursor-pointer left-14">
        <CameraIcon className="w-8 h-8" />
        <input
          type="file"
          className="hidden"
          id="uploadImage"
          accept="image/*"
          onChange={onImageSelectAndOpenModal}
        />
      </label>
      <textarea
        ref={textareaRef}
        className="w-full p-2 pl-20 pr-14 shadow-chatCard rounded-[10px] focus:ring-0 border-none scrollbar-hide resize-none max-h-40"
        onKeyUp={handleOnKeyPress}
        onChange={onChangeValue}
        value={chatText}
      />
      <button
        type="button"
        onClick={sendChat}
        className={`absolute right-14 ${
          messageEmpty ? 'cursor-not-allowed' : ''
        }`}
        disabled={messageEmpty}
        aria-label="Send Message"
      >
        <PaperPlaneIcon
          className={`w-8 h-8 duration-200 ${
            messageEmpty ? 'fill-gray-300' : 'fill-primary-200'
          }`}
        />
      </button>
      <ImageUploadModal
        imageFile={imageFile}
        open={imageUploadModalOpen}
        onClose={() => setImageUploadModalOpen(false)}
      />
    </div>
  );
}
