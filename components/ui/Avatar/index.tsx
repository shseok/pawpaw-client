import Image from "next/image";
import Link from "next/link";

interface AvatarType {
  user_img: string;
  user_name: string;
  size?: "small" | "base" | "large" | "xlarge" | "xxlarge";
}

export default function Avatar({
  size = "base",
  user_img,
  user_name,
}: AvatarType) {
  const avatarSizeVariants = {
    small: "w-8 h-8",
    base: "w-10 h-10",
    large: "w-12 h-12",
    xlarge: "w-14 h-14",
    xxlarge: "w-20 h-20",
  };

  const avatarSize = avatarSizeVariants[size];

  return (
    <div className={`relative  ${avatarSize}`}>
      <Image
        src={user_img}
        alt={user_name}
        fill
        priority
        className="absolute object-cover rounded-full"
      />
    </div>
  );
}
/**만약 프로필 사진 클릭하여 해당유저의 마이페이지로 가려면 Link 태그 사용 */
