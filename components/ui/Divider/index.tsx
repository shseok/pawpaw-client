interface DividerType {
  type: 'horizontal' | 'vertical';
}

export default function Divider({ type }: DividerType) {
  if (type === 'horizontal') {
    return <hr className="h-[1px] w-full bg-[#E9EBED]" />;
  }
  return <hr className="h-full  w-[1px] min-h-[1rem] bg-[#E9EBED]" />;
}
