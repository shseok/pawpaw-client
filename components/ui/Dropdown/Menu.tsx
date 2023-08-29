/* eslint-disable import/no-cycle */
import FlexBox from '../FlexBox';
import { useDropdown } from './Dropdown';

interface DropdownMenuType {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  width?: string;
}

export default function Menu({
  children,
  direction = 'right',
  width = 'w-48',
}: DropdownMenuType) {
  const { isOpen } = useDropdown();
  if (!isOpen) return null;
  const directionClass = direction === 'left' ? 'left-0' : 'right-0';
  return (
    <FlexBox
      as="ul"
      direction="column"
      className={`absolute ${directionClass} ${width}  gap-2 p-4 bg-white shadow-chatCard rounded-[10px]`}
    >
      {children}
    </FlexBox>
  );
}
