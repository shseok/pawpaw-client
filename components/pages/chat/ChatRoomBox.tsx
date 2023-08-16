'use client';

import FlexBox from '@/components/ui/FlexBox';
import Avatar from '@/components/ui/Avatar';

export default function ChatRoomBox() {
  return (
    <FlexBox
      direction="column"
      justify="end"
      className="flex-1 gap-5 px-10 overflow-y-auto scrollbar-hide"
    >
      <div className="flex items-center self-start w-fit ">
        <Avatar user_img="/default.png" user_name="" />
        ChatRoom ChatRoom ChatRoom ChatRoom ChatRoom ChatRoom ChatRoom ChatRoom
        ChatRoom ChatRoom ChatRoom ChatRoom ChatRoom ChatRoom ChatRoom ChatRoom
        ChatRoom ChatRoom ChatRoom ChatRoom
      </div>
      <div className="flex self-end w-fit ">
        ChatRoom ChatRoom ChatRoom ChatRoom ChatRoom
      </div>
      <div className="flex self-start w-fit ">
        <Avatar user_img="/default.png" user_name="" />
        ChatRoom ChatRoom ChatRoom ChatRoom ChatRoom
      </div>
      <div className="flex self-end w-fit ">
        ChatRoom ChatRoom ChatRoom ChatRoom ChatRoom
      </div>
    </FlexBox>
  );
}
