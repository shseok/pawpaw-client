import { deleteChatRoom } from '@/service/chatRoom';
import ConfirmModal from '@/components/ui/Modal/ConfirmModal';
import { useState } from 'react';
import Button from '@/components/ui/Button';
import { useRouter } from 'next/navigation';
import Toast from '@/utils/notification';

export default function DeleteChatRoomButton({ roomId }: { roomId: string }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const handleOpenPopup = () => {
    setOpen(true);
  };
  const handleDeleteChatRoom = async () => {
    try {
      await deleteChatRoom(roomId);
      Toast.success('채팅방을 삭제했어요.🐶');
      router.replace('/community');
    } catch (error) {
      if (error instanceof Error) {
        Toast.error(error.message);
      }
    } finally {
      setOpen(false);
    }
  };
  return (
    <>
      <button
        type="button"
        className="body2 text-red"
        onClick={handleOpenPopup}
      >
        채팅방삭제
      </button>
      <ConfirmModal open={open} onClose={() => setOpen(false)}>
        <p className="text-center header3">채팅방을 삭제 하시겠습니까?</p>
        <div className="flex gap-2">
          <Button
            fullWidth
            variant="secondary"
            onClickAction={() => setOpen(false)}
          >
            취소
          </Button>
          <Button fullWidth onClickAction={handleDeleteChatRoom}>
            삭제
          </Button>
        </div>
      </ConfirmModal>
    </>
  );
}
