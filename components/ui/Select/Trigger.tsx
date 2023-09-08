// eslint-disable-next-line import/no-cycle
import { useSelect } from '.';

interface SelectTriggerProps {
  children: React.ReactNode;
  className: string;
}

export default function Trigger({ children, className }: SelectTriggerProps) {
  const { onOpenChange, isOpen } = useSelect();

  return (
    <button
      type="button"
      className={`${
        isOpen ? 'ring-1 ring-primary-200 duration-150' : ''
      } ${className}`}
      onClick={onOpenChange}
    >
      {children}
    </button>
  );
}
