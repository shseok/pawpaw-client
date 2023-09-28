'use client';

import { useRegisterStore } from '@/hooks/stores/useRegisterStore';
import { useRouter, useSearchParams } from 'next/navigation';
import ProgressBar from '../ProgressBar';
import CheckListOfTerm from '../CheckListOfTerm';
import BottomButton from '../BottomButton';

export default function Policy({
  step,
  title,
}: {
  step: number;
  title: string;
}) {
  const checkList = useRegisterStore((state) => state.checkList);
  const router = useRouter();
  const searchParams = useSearchParams();
  const key = searchParams.get('key');

  return (
    <>
      <div className="flex flex-col items-center w-full gap-[56px]">
        <div className="flex flex-col items-center w-full">
          <h1 className="header1">{title}</h1>
          <ProgressBar step={step} />
        </div>
        <CheckListOfTerm />
      </div>
      <BottomButton
        text="다음"
        isFullWidth
        variant="primary"
        isDisabled={checkList.slice(0, 3).some((v) => !v)}
        handleClick={() => {
          router.push(`/auth/social/location?key=${key}`);
        }}
      />
    </>
  );
}
