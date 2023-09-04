import FlexBox from '@/components/ui/FlexBox';
import ChatUser from './ChatUser';
import UserAddButton from './UserAddButton';

const userList = [
  { image: '/default.png', name: '닉네임1', petName: '3살 감자' },
  { image: '/default.png', name: '닉네임2', petName: '4살 감자' },
  { image: '/default.png', name: '닉네임3', petName: '5살 감자' },
  { image: '/default.png', name: '닉네임5', petName: '5살 감자' },
  { image: '/default.png', name: '닉네임6', petName: '5살 감자' },
  { image: '/default.png', name: '닉네임7', petName: '5살 감자' },
  { image: '/default.png', name: '닉네임8', petName: '5살 감자' },
  { image: '/default.png', name: '닉네임9', petName: '5살 감자' },
  { image: '/default.png', name: '닉네임10', petName: '5살 감자' },
];

export default function ChatUserList() {
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
        {userList.map((user) => (
          <li key={user.name}>
            <ChatUser
              image={user.image}
              name={user.name}
              petName={user.petName}
              icon
            />
          </li>
        ))}
      </ul>
    </FlexBox>
  );
}
