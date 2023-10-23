/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

'use client';

import Image from 'next/image';
import ModalBoardCard from '@/components/ui/BoardCard/ModalBoardCard';
import { useRouter } from 'next/navigation';
import { MouseEventHandler, useCallback, useEffect, useRef } from 'react';
import FlexBox from '../../../ui/FlexBox';

export default function BoardModal({ boardId }: { boardId: number }) {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper],
  );

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
      onClick={onClick}
    >
      <FlexBox direction="column" className="gap-4">
        <FlexBox justify="end" className="w-full">
          <button type="button" onClick={() => router.back()}>
            <Image
              src="/Feed/desktop/ModalOut.svg"
              alt="나가기"
              width={32}
              height={32}
            />
          </button>
        </FlexBox>
        <div ref={wrapper}>
          <ModalBoardCard boardId={boardId} />
        </div>
      </FlexBox>
    </div>
  );
}
