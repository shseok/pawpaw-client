'use client';

import CheckListOfTerm from '@/components/pages/auth/CheckListOfTerm';
import ProgressBar from '@/components/pages/auth/ProgressBar';
import Button from '@/components/ui/Button';
import { useRegisterStore } from '@/hooks/stores/useRegisterStore';
import { useRouter, useSearchParams } from 'next/navigation';

const STEP = 1;

export default function Policy() {
  const checkList = useRegisterStore((state) => state.checkList);
  const router = useRouter();
  const searchParams = useSearchParams();
  const key = searchParams.get('key');
  console.log(checkList);
  return (
    <>
      <div className="flex flex-col items-center max-w-[400px] w-full gap-[56px]">
        <div className="flex flex-col items-center w-full">
          <h1 className="header1">약관동의</h1>
          <ProgressBar step={STEP} />
        </div>
        <CheckListOfTerm />
      </div>
      <div className="flex flex-col items-center gap-10 w-full">
        <Button
          className="text-lg flex-1 px-[20px] py-[16px]"
          fullWidth
          disabled={checkList.slice(0, 3).some((v) => !v)}
          variant="primary"
          onClickAction={() => {
            router.push(`/auth/social/location?key=${key}`);
          }}
        >
          다음
        </Button>
      </div>
    </>
  );
}
