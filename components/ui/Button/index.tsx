'use client';

import Link from 'next/link';
import { MouseEventHandler, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode | string;
  type?: 'button' | 'submit' | 'reset';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary' | 'ghost' | 'light';
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
  onClickAction?: MouseEventHandler<HTMLButtonElement>;
  to?: string;
}
const sizes = {
  xs: 'h-[32px]',
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
  light: 'bg-primary-100 hover:bg-primary-200 text-grey-600',
};

export default function Button({
  type = 'button',
  children,
  size = 'md',
  variant = 'primary',
  disabled = false,
  className = '',
  fullWidth = false,
  onClickAction = () => console.error('onClick 이벤트가 정의되지 않았습니다.'),
  to,
}: ButtonProps) {
  const fwClass = fullWidth && 'w-full';
  const sizeClass = sizes[size];
  const variantClass = variants[variant];
  const disabledClass = disabled
    ? `opacity-50 cursor-not-allowed disabled:bg-grey-200 disabled:text-grey-400 disabled:border-none`
    : '';
  const styles = `rounded-[10px] ${sizeClass} ${fwClass} ${variantClass} ${disabledClass} ${className}`;
  return to ? (
    <Link href={to} className={`${styles} text-center`}>
      {children}
    </Link>
  ) : (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={styles}
      onClick={onClickAction}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
