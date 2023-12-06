/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

'use client';

import ModalBoardCard from '@/components/ui/BoardCard/ModalBoardCard';
import { useRouter } from 'next/navigation';
import { MouseEventHandler, useCallback, useEffect, useRef } from 'react';
import XIcon from '@/public/svgs/X.svg';
import FlexBox from '../../../ui/FlexBox';

export default function BoardModal({ boardId }: { boardId: number }) {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();

  // 모달 닫는 (이전 url로 돌아가는) 콜백함수
  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  // overlay(모달 바깥쪽)에 마우스 클릭시 dismiss
  const onOutsideClick: MouseEventHandler = useCallback(
    (e) => {
      const isOverlayOrWrapper =
        e.target === overlay.current || e.target === wrapper.current;
      if (isOverlayOrWrapper && onDismiss) {
        onDismiss();
      }
    },
    [onDismiss, overlay, wrapper],
  );

  // 키보드 esc 눌렀을 때 dismiss
  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onDismiss();
    },
    [onDismiss],
  );

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onKeyDown]);

  return (
    <div
      ref={overlay}
      className="fixed inset-0 flex items-center justify-center flex-1 w-screen bg-black bg-opacity-70"
      onClick={onOutsideClick}
    >
      <FlexBox direction="column" className="gap-4">
        <FlexBox justify="end" className="w-full">
          <button
            type="button"
            onClick={() => router.back()}
            aria-label="Close Board Modal"
          >
            <XIcon className="w-8 h-8" />
          </button>
        </FlexBox>
        <div ref={wrapper}>
          <ModalBoardCard boardId={boardId} />
        </div>
      </FlexBox>
    </div>
  );
}
