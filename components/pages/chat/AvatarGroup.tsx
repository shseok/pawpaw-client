import Avatar from '@/components/ui/Avatar';

export default function AvatarGroup({ userList }: { userList: number[] }) {
  return (
    <div className="flex -space-x-3">
      {Array.from({ length: 3 }).map((_, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <Avatar user_img="/default.png" user_name="" key={i} />
      ))}
      {userList.length > 5 && (
        <div className="w-10 h-10 rounded-full bg-[#CBCDD2] text-white border-white flex justify-center items-center border-[1px]">
          +{userList.length - 5}
        </div>
      )}
    </div>
  );
}
