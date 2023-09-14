import { useSelectContext } from '.';

interface SelectTriggerProps {
  children: React.ReactNode;
}

export default function Trigger({ children }: SelectTriggerProps) {
  const { onOpenChange } = useSelectContext();

  return (
    <button type="button" className="w-full h-full" onClick={onOpenChange}>
      {children}
    </button>
  );
}
