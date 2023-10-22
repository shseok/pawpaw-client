import ChatUser from '../../../pages/chat/ChatRoom/ChatUser';

interface SearchedUserListType {
  userList: {
    userId: string;
    imageUrl: string;
    nickname: string;
    briefIntroduction: string;
  }[];
  selectedUser: string;
  handleSelectUser: (userId: string) => void;
}

export default function SearchedUserList({
  userList,
  handleSelectUser,
  selectedUser,
}: SearchedUserListType) {
  if (!userList) return null;
  return (
    <div className="flex flex-col w-full gap-4">
      {userList.length >= 1 && (
        <div className="w-full header4">
          <p>
            검색결과
            <span className="text-primary-200">{userList.length}건</span>
          </p>
        </div>
      )}
      <ul className="grid grid-cols-1 gap-4 p-2 overflow-auto md:grid-cols-2 max-h-72 scrollbar-hide">
        {userList &&
          userList.map((user) => (
            <li
              key={user.userId}
              className={`rounded-[10px] duration-200 hover:shadow-chatCard ${
                user.userId === selectedUser ? 'ring-2 ring-primary-200' : ''
              }`}
            >
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label className="cursor-pointer" htmlFor={user.userId}>
                <ChatUser
                  shadow
                  image={user.imageUrl}
                  name={user.nickname}
                  petName={user.briefIntroduction ?? '반려펫을 입력해주세요.🐶'}
                />
                <input
                  id={user.userId}
                  type="radio"
                  checked={user.userId === selectedUser}
                  onChange={() => handleSelectUser(user.userId)}
                  className="hidden"
                />
              </label>
            </li>
          ))}
      </ul>
    </div>
  );
}
