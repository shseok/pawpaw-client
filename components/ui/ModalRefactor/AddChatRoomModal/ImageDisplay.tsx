import Image from 'next/image';
import CameraIcon from '@/public/Camera.svg';

interface ImageDisplayProps {
  image: string;
}

export default function ImageDisplay({ image }: ImageDisplayProps) {
  return (
    <div className="relative flex-1 h-44 tablet:h-60">
      <Image
        src={image}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
        className="rounded-[10px] tablet:rounded-none"
      />
      <button
        onClick={() => console.log('d')}
        type="button"
        className="absolute bottom-0 right-0 flex items-center justify-center w-12 h-12 mb-2 mr-2 rounded-full bg-grey-200 tablet:hidden"
      >
        <CameraIcon />
      </button>
    </div>
  );
}
