'use client';

import Button from '@/components/ui/Button';
import FlexBox from '@/components/ui/FlexBox';

export default function LeaveChatRoomModal({
  closeModal,
}: {
  closeModal: () => void;
}) {
  return (
    <FlexBox
      direction="column"
      className="px-4 pt-10 pb-4 bg-white  rounded-[10px] gap-7 w-full sm:w-96"
    >
      <p className="header4">채팅방을 나가시겠습니까?</p>
      <FlexBox className="w-full gap-3">
        <Button
          className="w-full body2"
          onClickAction={closeModal}
          variant="secondary"
        >
          취소
        </Button>
        <Button
          className="w-full body2"
          onClickAction={() => window.location.replace('/community')}
        >
          나가기
        </Button>
      </FlexBox>
    </FlexBox>
  );
}
