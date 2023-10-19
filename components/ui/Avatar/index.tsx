import Image from 'next/image';

interface AvatarType {
  image: string | undefined;
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
      src={image ?? '/images/default.avif'}
      alt={name}
      width={40}
      height={40}
      priority
      className={`object-cover rounded-full ${avatarSize}`}
    />
  );
}
