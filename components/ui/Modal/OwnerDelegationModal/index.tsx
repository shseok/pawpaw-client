import { ModalProps } from '@/types/types';
import useGetChatRoomUserList from '@/hooks/queries/useGetChatRoomUserList';
import { usePathname } from 'next/navigation';
import ChatUser from '@/components/pages/chat/ChatRoom/ChatUser';
import { useState } from 'react';
import useDelegateRoomOwner from '@/hooks/mutations/useDelegateRoomOwner';
import { Button, Modal } from '@/components/ui/ui';

interface UserInfo {
  userName: string;
  userId: string;
}
export default function OwnerDelegationModal({ onClose, open }: ModalProps) {
  const roomId = usePathname().split('/')[2];
  const { data: userList } = useGetChatRoomUserList(roomId);
  const [selectedUser, setSelectedUser] = useState<UserInfo>({
    userName: '',
    userId: '',
  });
  const { delegateOwnerMutate } = useDelegateRoomOwner({
    user: selectedUser.userName,
    modalClose: onClose,
  });
  const handleSelectUser = (info: UserInfo) => {
    setSelectedUser(info);
  };
  const handleDelegateRoomOwner = () => {
    if (
      window.confirm(
        `${selectedUser.userName}님에게 방장권한을 넘겨주시겠습니까?`,
      )
    ) {
      delegateOwnerMutate({ roomId, userId: selectedUser.userId });
    }
  };
  return (
    <Modal onClose={onClose} open={open}>
      <div className="flex flex-col justify-between bg-white rounded-[10px] w-screen sm:w-96 h-screen sm:h-[500px]">
        <span className="p-2 text-center border-b-2 header3">방장 넘기기</span>
        <ul className="flex flex-col gap-2 p-2 overflow-y-scroll">
          {userList?.map((user) => (
            <li
              key={user.userId}
              className={`rounded-[10px] duration-200 hover:shadow-chatCard ${
                user.userId === selectedUser.userId
                  ? 'ring-2 ring-primary-200'
                  : ''
              }`}
            >
              <label htmlFor={`delegation-${user.userId}`}>
                <input
                  id={`delegation-${user.userId}`}
                  type="radio"
                  className="hidden"
                  checked={user.userId === selectedUser.userId}
                  onChange={() =>
                    handleSelectUser({
                      userId: user.userId,
                      userName: user.nickname,
                    })
                  }
                />
                <ChatUser
                  image={user.imageUrl}
                  name={user.nickname}
                  petName={user.briefIntroduction}
                />
              </label>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 p-4 ">
          <Button fullWidth onClickAction={onClose} variant="secondary">
            취소
          </Button>
          <Button fullWidth onClickAction={handleDelegateRoomOwner}>
            선택
          </Button>
        </div>
      </div>
    </Modal>
  );
}
