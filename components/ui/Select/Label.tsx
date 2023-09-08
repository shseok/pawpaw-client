// eslint-disable-next-line import/no-cycle
import { useSelect } from '.';

interface SelectLabelProps {
  defaultValue: string | number;
}

export default function Label({ defaultValue }: SelectLabelProps) {
  const { value } = useSelect();
  return <div className="relative">{value || defaultValue}</div>;
}
