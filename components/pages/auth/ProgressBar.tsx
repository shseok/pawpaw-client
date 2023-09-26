import React from 'react';

interface Props {
  step: number;
}

const stepStyles = [
  'w-1/3 h-1 bg-primary-200',
  'w-2/3 h-1 bg-primary-200',
  'w-3/3 h-1 bg-primary-200',
];

export default function ProgressBar({ step }: Props) {
  return (
    <div className="w-full mt-[32px] h-1 bg-grey-200">
      <div className={stepStyles[step - 1]} />
    </div>
  );
}
