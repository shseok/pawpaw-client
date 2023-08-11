import { ElementType, ReactNode } from 'react';

interface FlexBoxProps {
  children: ReactNode;
  direction?: 'row' | 'column';
  justify?: 'start' | 'end' | 'center' | 'between' | 'around';
  align?: 'start' | 'end' | 'center';
  className?: string;
  as?: ElementType;
}
const justifyOptions = {
  start: 'justify-start',
  end: 'justify-end',
  center: 'justify-center',
  between: 'justify-between',
  around: 'justify-around',
};
const directionOptions = {
  row: 'flex-row',
  column: 'flex-col',
};
const alignOptions = {
  start: 'items-start',
  end: 'items-end',
  center: 'items-center',
};
/**
 *@name FlexBox - flex 속성이 적용되어있으며 가운데정렬이 기본값인 컴포넌트
 * @props align : align-items 속성 (기본값 : center)
 * @props direction : direction 속성 (기본값 : row)
 * @props gap : gap 속성 (기본값 : 0)
 * @props justify : justify-content 속성 (기본값 : center)
 * @props className : 기타 추가하고싶은 클래스명 작성 (기본값 :"")
 * @props as : 태그를 설정할수있습니다 as="aside" 를 prop으로 넘겨주면 해당박스의태그는 aside가 됩니다. (기본값: "div")
 */
export default function FlexBox({
  children,
  className = '',
  direction = 'row',
  justify = 'center',
  align = 'center',
  as: Container = 'div',
}: FlexBoxProps) {
  const justifyContent = justifyOptions[justify];
  const flexDirection = directionOptions[direction];
  const alignItems = alignOptions[align];
  return (
    <Container
      className={`flex ${flexDirection} ${justifyContent} ${alignItems} ${className}`}
    >
      {children}
    </Container>
  );
}
