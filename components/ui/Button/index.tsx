'use client';

import Link from 'next/link';
import { MouseEventHandler, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode | string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary' | 'ghost';
  disabled?: boolean;
  disabledTextColor?: string;
  className?: string;
  fullWidth?: boolean;
  onClickAction?: MouseEventHandler<HTMLButtonElement>;
  to?: string;
}
const sizes = {
  xs: 'h-[32px] body2',
  sm: 'h-[36px] p-2.5',
  md: 'h-[42px] p-2.5',
  lg: 'h-[54px] p-2.5',
  xl: 'h-[66px] p-2.5',
};
const variants = {
  primary: 'bg-primary-200 hover:bg-primary-300 text-white',
  secondary:
    'bg-white border border-primary-200 text-primary-200 hover:border-primary-300 hover:text-primary-300',
  ghost:
    'bg-white border border-grey-200 text-primary-800 hover:border-grey-200 hover:bg-primary-50 flex justify-center items-center',
};

export default function Button({
  children,
  size = 'md',
  variant = 'primary',
  disabled = false,
  disabledTextColor,
  className = '',
  fullWidth = false,
  // eslint-disable-next-line no-console
  onClickAction = () => console.error('onClick 이벤트가 정의되지 않았습니다.'),
  to,
}: ButtonProps) {
  const fwClass = fullWidth && 'w-full';
  const sizeClass = sizes[size];
  const variantClass = variants[variant];
  disabledTextColor ??= 'text-grey-300';
  const disabledClass =
    disabled &&
    `opacity-50 cursor-not-allowed disabled:bg-grey-200 disabled:${disabledTextColor} disabled:border-none`;
  return to ? (
    <Link
      href={to}
      className={`rounded-[10px] ${sizeClass} ${fwClass} ${variantClass} ${disabledClass} ${className}`}
    >
      {children}
    </Link>
  ) : (
    <button
      type="button"
      className={`rounded-[10px] ${sizeClass} ${fwClass} ${variantClass} ${disabledClass} ${className}`}
      onClick={onClickAction}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
