import { ChangeEvent, useState } from 'react';

const useImageUpload = (defaultImage: string) => {
  const [imagePreview, setImagePreview] = useState(defaultImage);
  const [imageFile, setImageFile] = useState<File>();
  // eslint-disable-next-line consistent-return
  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return new Error('이미지를 업로드 해야합니다.');
    }
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  return { imagePreview, imageFile, handleImageUpload };
};
export default useImageUpload;
