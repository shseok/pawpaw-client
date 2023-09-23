import { ChangeEvent, useState } from 'react';

const useImageUpload = (defaultImage: string) => {
  const [image, setImage] = useState(defaultImage);
  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return new Error('이미지를 업로드 해야합니다.');
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    return new Promise((resolve, reject) => {
      reader.onload = () => {
        const result = reader.result as string;
        setImage(result);
        resolve(console.log('이미지 업로드 완료'));
      };
      reader.onerror = () => {
        reject(new Error('이미지 업로드 실패'));
      };
    });
  };

  return { image, setImage, handleImageUpload };
};
export default useImageUpload;
