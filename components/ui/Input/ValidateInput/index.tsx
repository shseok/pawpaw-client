import { cn } from '@/utils/common';
import Check from '@/public/Auth/check.svg';
import Alert from '@/public/Auth/alert.svg';
import React from 'react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  success?: boolean;
}

const ValidateInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, success, ...props }, ref) => {
    const inputClassName = cn(
      'w-full rounded-[10px] placeholder-grey-400 py-4 px-5 border-none ring-1 focus:ring-1 focus:ring-grey-200 ring-grey-200',
      className,
      {
        'ring-grey-200 focus:ring-grey-200': !error && !success,
        'ring-red focus:ring-red': error,
        'ring-primary-300 focus:ring-primary-300': success,
      },
    );

    return (
      <div className="relative">
        <input
          className={inputClassName}
          autoComplete="on"
          ref={ref}
          {...props}
        />
        {error && (
          <Alert className="absolute top-1/2 right-5 transform -translate-x-1/2 -translate-y-1/2 fill-red" />
        )}
        {success && (
          <Check className="absolute top-1/2 right-5 transform -translate-x-1/2 -translate-y-1/2 fill-primary-300" />
        )}
      </div>
    );
  },
);

ValidateInput.displayName = 'ValidateInput';

export { ValidateInput };
