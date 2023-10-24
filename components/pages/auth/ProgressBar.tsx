import React from 'react';

interface Props {
  step: number;
  limit: 3 | 5;
}

const threeStepStyles = [
  'w-1/3 h-1 bg-primary-200',
  'w-2/3 h-1 bg-primary-200',
  'w-3/3 h-1 bg-primary-200',
];

const FiveStepStyles = [
  'w-1/5 h-1 bg-primary-200',
  'w-2/5 h-1 bg-primary-200',
  'w-3/5 h-1 bg-primary-200',
  'w-4/5 h-1 bg-primary-200',
  'w-5/5 h-1 bg-primary-200',
];

export default function ProgressBar({ step, limit }: Props) {
  return (
    <div className="w-full mt-[32px] h-1 bg-grey-200">
      <div
        className={
          limit === 3 ? threeStepStyles[step - 1] : FiveStepStyles[step - 1]
        }
      />
    </div>
  );
}
