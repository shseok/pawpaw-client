'use client';

import { useGeneralRegisterStore } from '@/hooks/stores/useGeneralRegisterStore';
import { useRouter, useSearchParams } from 'next/navigation';
import ProgressBar from '../ProgressBar';
import CheckListOfTerm from '../CheckListOfTerm';
import BottomButton from '../BottomButton';

export default function Policy({ title }: { title: string }) {
  const checkList = useGeneralRegisterStore((state) => state.checkList);
  const router = useRouter();
  const searchParams = useSearchParams();
  const key = searchParams.get('key');

  return (
    <>
      <div className="flex flex-col items-center w-full gap-[56px] mb-[155px]">
        <div className="flex flex-col items-center w-full">
          <h1 className="header1">{title}</h1>
          <ProgressBar step={1} limit={key ? 3 : 5} />
        </div>
        <CheckListOfTerm />
      </div>
      <BottomButton
        text="다음"
        isFullWidth
        variant="primary"
        isDisabled={checkList.slice(0, 3).some((v) => !v)}
        handleClick={() => {
          const link = key
            ? `/auth/location?key=${key}&step=2`
            : '/auth/register?step=2';
          router.push(link);
        }}
      />
    </>
  );
}
