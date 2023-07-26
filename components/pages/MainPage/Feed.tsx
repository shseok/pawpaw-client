import FlexBox from "@/components/ui/FlexBox";
import { ReactNode } from "react";

interface FeedProps {
  children: ReactNode | string;
}
export default function Feed({ children }: FeedProps) {
  return (
    <FlexBox direction="column" className="gap-[16px] w-full">
      {children}
    </FlexBox>
  );
}
