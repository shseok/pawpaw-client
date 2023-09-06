'use client';

import { MouseEventHandler, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode | string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  className?: string;
  onClickAction?: MouseEventHandler<HTMLButtonElement>;
}
const sizes = {
  xs: 'h-[32px] w-[58px] body2',
  sm: 'h-[36px] p-2.5',
  md: 'h-[42px] w-20 p-2.5 tablet:w-24',
  lg: 'h-[54px] w-40 p-2.5',
  xl: 'h-[66px] p-2.5',
};
const variants = {
  primary: 'bg-primary-200 hover:bg-primary-300 text-white',
  secondary:
    'bg-white border border-primary-200 text-primary-200 hover:border-primary-300 hover:text-primary-300',
};

export default function Button({
  children,
  size = 'md',
  variant = 'primary',
  disabled = false,
  className = '',
  // eslint-disable-next-line no-console
  onClickAction = () => console.error('onClick 이벤트가 정의되지 않았습니다.'),
}: ButtonProps) {
  const sizeClass = sizes[size];
  const variantClass = variants[variant];
  const disabledClass =
    disabled &&
    'opacity-50 cursor-not-allowed disabled:bg-grey-200 disabled:text-grey-300 disabled:border-none';
  return (
    <button
      type="button"
      className={`rounded-[10px] ${sizeClass} ${variantClass} ${disabledClass} ${className}`}
      onClick={onClickAction}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
