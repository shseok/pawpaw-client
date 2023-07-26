import Image from "next/image";
import Link from "next/link";
interface AvatarType {
  user_img: string;
  user_name: string;
  width: number;
  height: number;
}

export default function Avatar({
  height,
  width,
  user_img,
  user_name,
}: AvatarType) {
  const widthClass = `w-${width}`;
  const heightClass = `h-${height}`;
  return (
    <div className={`relative ${widthClass} ${heightClass}`}>
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
