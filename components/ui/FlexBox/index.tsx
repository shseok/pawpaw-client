import { ElementType, ReactNode } from "react";

interface FlexBoxProps {
  children: ReactNode;
  direction?: "row" | "column";
  gap?: number;
  justify?: "start" | "end" | "center" | "between" | "around";
  align?: "start" | "end" | "center";
  className?: string;
  as?: ElementType;
}
const justifyOptions = {
  start: "justify-start",
  end: "justify-end",
  center: "justify-center",
  between: "justify-between",
  around: "justify-around",
};
const directionOptions = {
  row: "flex-row",
  column: "flex-col",
};
const alignOptions = {
  start: "items-start",
  end: "items-end",
  center: "items-center",
};
/**
 *@name FlexBox - flex 속성이 적용되어있으며 가운데정렬이 기본값인 컴포넌트
 * @props align : align-items 속성 (기본값 : center)
 * @props direction : direction 속성 (기본값 : row)
 * @props gap : gap 속성 (기본값 : 0)
 * @props justify : justify-content 속성 (기본값 : center)
 * @props className : 기타 추가하고싶은 클래스명 작성 (기본값 :"")
 */
export default function FlexBox({
  children,
  className = "",
  direction = "row",
  justify = "center",
  align = "center",
  gap = 0,
  as: Container = "div",
}: FlexBoxProps) {
  const justifyContent = justifyOptions[justify];
  const flexDirection = directionOptions[direction];
  const alignItems = alignOptions[align];
  const gapSize = `gap-${gap}`;
  return (
    <Container
      className={`flex ${flexDirection} ${justifyContent} ${alignItems} ${gapSize} ${className}`}
    >
      {children}
    </Container>
  );
}
