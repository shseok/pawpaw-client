'use client';

import { MouseEventHandler, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode | string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  className?: string;
  onClickAction?: MouseEventHandler<HTMLButtonElement>;
}
const sizes = {
  sm: 'h-[36px]',
  md: 'h-[42px] w-20 tablet:w-24',
  lg: 'h-[54px]',
  xl: 'h-[66px]',
};
const variants = {
  primary: 'bg-primary hover:bg-[#08995C] text-white',
  secondary:
    'bg-white border-2 border-primary  text-primary hover:border-[#08995C] hover:text-[#08995C]',
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
  const disabledClass = disabled && 'opacity-50 cursor-not-allowed';
  return (
    <button
      type="button"
      className={`rounded-[10px] p-2 ${sizeClass} ${variantClass} ${disabledClass} ${className}`}
      onClick={onClickAction}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
