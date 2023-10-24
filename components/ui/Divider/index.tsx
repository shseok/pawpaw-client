interface DividerType {
  type: 'horizontal' | 'vertical';
  className?: string;
}

export default function Divider({ type, className }: DividerType) {
  const cn =
    type === 'horizontal'
      ? `h-[1px] w-full bg-grey-200 ${className}`
      : `h-full  w-[1px] min-h-[1rem] bg-grey-200 ${className}`;

  return <hr className={cn} />;
}
