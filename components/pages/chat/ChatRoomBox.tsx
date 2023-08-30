import FlexBox from '@/components/ui/FlexBox';
import Message from './Message';

const messageList = [
  {
    userInfo: { userImg: '/default.png', userName: '홍길동' },
    sender: true,
    text: '안녕하세요 처음뵙겠습니다. 다들 반가워요!',
    sendTime: '오후 11:39',
  },
  {
    userInfo: { userImg: '/default.png', userName: '김떙땡' },
    sender: false,
    text: '반가워요 홍길동님',
    sendTime: '오후 11:40',
  },
  {
    userInfo: { userImg: '/default.png', userName: '홍길동' },
    sender: true,
    text: '반가워요 김땡땡님!! 😎',
    sendTime: '오후 11:40',
  },
  {
    userInfo: { userImg: '/default.png', userName: '김떙땡' },
    sender: false,
    text: '홍길동님은 어떤 반려동물을 키우시나요?? 🐶',
    sendTime: '오후 11:40',
  },
];

export default function ChatRoomBox() {
  return (
    <FlexBox
      direction="column"
      justify="start"
      className="flex-1 w-full px-4 pt-10 overflow-auto scrollbar-hide tablet:px-10"
    >
      {messageList.map((message, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Message key={index} message={message} />
      ))}
    </FlexBox>
  );
}
