import Avatar from '@/components/ui/Avatar';

interface UserList {
  nickname: string;
  imageUrl: string;
}

export default function AvatarGroup({ userList }: { userList: UserList[] }) {
  return (
    <div className="flex self-start -space-x-3">
      {userList.map((user, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <Avatar image={user.imageUrl} name="" key={i} />
      ))}
      {userList.length > 5 && (
        <div className="w-10 h-10 rounded-full bg-grey-300 text-white border-white flex justify-center items-center border-[1px]">
          +{userList.length - 5}
        </div>
      )}
    </div>
  );
}
