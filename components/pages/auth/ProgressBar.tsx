import React from 'react';

interface Props {
  step: number;
}

const ProgressBar = ({ step }: Props) => {
  return (
    <div className="w-full mt-[32px] mb-[56px] h-1 bg-grey-200">
      <div className={`w-${step}/3 h-1 bg-primary-200`} />
    </div>
  );
};

export default ProgressBar;
