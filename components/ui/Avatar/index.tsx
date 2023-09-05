import Image from 'next/image';
// import Link from "next/link";

interface AvatarType {
  image: string;
  name: string;
  size?: 'small' | 'base' | 'large' | 'xl' | 'xxl';
}

export default function Avatar({ size = 'base', image, name }: AvatarType) {
  const avatarSizeVariants = {
    small: 'w-8 h-8',
    base: 'w-10 h-10',
    large: 'w-[52px] h-[52px]',
    xl: 'w-14 h-14',
    xxl: 'w-20 h-20',
  };

  const avatarSize = avatarSizeVariants[size];

  return (
    <Image
      src={image}
      alt={name}
      width={40}
      height={40}
      priority
      className={`object-cover rounded-full ${avatarSize}`}
    />
  );
}
/* 만약 프로필 사진 클릭하여 해당유저의 마이페이지로 가려면 Link 태그 사용 */
