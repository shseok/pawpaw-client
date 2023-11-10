'use client';

import { useEffect } from 'react';
import Button from '@/components/ui/Button';
import { useRouter } from 'next/navigation';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { replace } = useRouter();
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-10">
      <h2 className="header1">예기치 못한 오류가 발생하였습니다.🤯</h2>
      <p>잠시후 다시 시도해주세요.</p>
      <div className="flex gap-2 w-80">
        <Button fullWidth onClickAction={() => replace('/')}>
          메인으로
        </Button>
        <Button onClickAction={reset} fullWidth>
          새로고침
        </Button>
      </div>
    </div>
  );
}
