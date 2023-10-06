'use client';

import FlexBox from '@/components/ui/FlexBox';
import useGetChatRoomUserList from '@/hooks/queries/useGetChatRoomUsetList';
import ChatUserListLoading from '@/components/ui/Loading/ChatUserListLoading';
import ChatUser from './ChatUser';
import UserAddButton from './UserAddButton';

export default function ChatUserList({ roomId }: { roomId: string }) {
  const { data: userList, isLoading } = useGetChatRoomUserList(roomId);
  console.log(userList);

  return (
    <FlexBox
      direction="column"
      className="gap-2 px-6 py-4 border-b-[1px] h-1/2"
    >
      <FlexBox justify="between" className="w-full">
        <FlexBox as="header" className="gap-2 p-2">
          <h1 className="text-2xl font-bold">인원</h1>
          <FlexBox className="gap-1">
            <p>21</p>
            <p className="text-grey-500">/ 60</p>
          </FlexBox>
        </FlexBox>
        <UserAddButton />
      </FlexBox>
      <ul className="w-full h-full overflow-auto scrollbar-hide">
        {isLoading ? (
          <ChatUserListLoading />
        ) : (
          userList?.map((user) => (
            <li key={user.nickname}>
              <ChatUser
                role={user.role}
                image={user.imageUrl}
                name={user.nickname}
                petName={
                  user.briefIntroduction ?? '나의 반려견을 등록해주세요.🐶'
                }
              />
            </li>
          ))
        )}
        <ChatUserListLoading />
      </ul>
    </FlexBox>
  );
}
