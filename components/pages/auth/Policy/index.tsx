'use client';

import { useSocialRegisterStore } from '@/hooks/stores/useSocialRegisterStore';
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
  const checkList = useSocialRegisterStore((state) => state.checkList);
  const router = useRouter();
  const searchParams = useSearchParams();
  const key = searchParams.get('key');
  const next = searchParams.get('next');

  return (
    <>
      <div className="flex flex-col items-center w-full gap-[56px] mb-[155px]">
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
          if (next) {
            router.push(`${next}`);
            return;
          }
          router.push(`/auth/location?key=${key}`);
        }}
      />
    </>
  );
}
