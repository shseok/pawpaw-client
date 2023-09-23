import React from 'react';

interface Props {
  step: number;
}

export default function ProgressBar({ step }: Props) {
  const handleProgress = () => {
    switch (step) {
      case 1:
        return <div className={`w-1/3 h-1 bg-primary-200`} />;
      case 2:
        return <div className={`w-2/3 h-1 bg-primary-200`} />;
      case 3:
        return <div className={`w-3/3 h-1 bg-primary-200`} />;
      default:
        return;
    }
  };

  return (
    <div className="w-full mt-[32px] h-1 bg-grey-200">{handleProgress()}</div>
  );
}
