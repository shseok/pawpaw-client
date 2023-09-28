import React from 'react';
import Modal from '..';
import { ModalProps } from '@/types/types';
import Button from '../../Button';

export default function ConfirmLocationModal({ open, onClose }: ModalProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="flex flex-col justify-center bg-white p-[18px] gap-[28px] w-[376px] rounded-[10px]">
        <div className="flex flex-col justify-center gap-[20px] px-[33px] pt-[22px]">
          <p className="header4 ">위치정보 이용 권한 설정이 필요합니다.</p>
          <span>
            내 주변 동네를 설정하려면 사용 중인 브라우저의 위치 권한을
            허용해주세요.
          </span>
        </div>
        <Button fullWidth variant="ghost" onClickAction={onClose}>
          닫기
        </Button>
      </div>
    </Modal>
  );
}
