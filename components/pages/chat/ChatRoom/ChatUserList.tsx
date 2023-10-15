'use client';

import FlexBox from '@/components/ui/FlexBox';
import useGetChatRoomUserList from '@/hooks/queries/useGetChatRoomUserList';
import ChatUserListLoading from '@/components/ui/Loading/ChatUserListLoading';
import useGetUserInfo from '@/hooks/queries/useGetUserInfo';
import ChatUser from './ChatUser';
import UserAddButton from './UserAddButton';
import DelegateOwnerButton from './DelegateOwnerButton';
import DeleteChatRoomButton from './DeleteChatRoomButton';

export default function ChatUserList({ roomId }: { roomId: string }) {
  const { data: userList, isLoading } = useGetChatRoomUserList(roomId);
  const { data: userInfo } = useGetUserInfo();

  const isManager =
    userList?.find((user) => user.role === 'MANAGER')?.nickname ===
    userInfo?.nickname;

  return (
    <FlexBox
      direction="column"
      className="gap-2 px-6 py-4 border-b-[1px] h-1/2"
    >
      <FlexBox justify="between" className="w-full">
        <FlexBox as="header" className="gap-2 p-2">
          <h1 className="text-2xl font-bold">인원</h1>
          <FlexBox className="gap-1">
            <p>{userList?.length}</p>
            <p className="text-grey-500">/60</p>
          </FlexBox>
        </FlexBox>
        {isManager && (
          <div className="flex gap-2">
            <DeleteChatRoomButton roomId={roomId} />
            <DelegateOwnerButton />
            <UserAddButton />
          </div>
        )}
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
      </ul>
    </FlexBox>
  );
}
