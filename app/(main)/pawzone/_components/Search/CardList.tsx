import { Place } from '@/types/types';
import Card from './Card';

interface Props {
  list: Place[];
}

export default function CardList({ list }: Props) {
  const inputText =
    '브레이크타임\\n20:30 라스트오더\\n1,3주/토요일휴무\\t11:00 - 21:00\\n15:00 - 17:00 브레이크타임\\n20:30 라스트오더\\n화\\n▪︎\\t11:00 - 21:00\\n15:00 - 17:00 브레이크타임\\n20:30 라스트오더\\n1,3주/토요일휴무\\t11:00 - 21:00\\n15:00 - 17:00 브레이크타임\\n20:30 라스트오더\\n수\\n▪︎\\t11:00 - 21:00\\n15:00 - 17:00 브레이크타임\\n20:30 라스트오더\\n1,3주/토요일휴무\\t11:00 - 21:00\\n15:00 - 17:00 브레이크타임\\n20:30 라스트오더\\n목\\n▪︎\\t11:00 - 21:00\\n15:00 - 17:00 브레이크타임\\n20:30 라스트오더\\n1,3주/토요일휴무\\t11:00 - 21:00\\n15:00 - 17:00 브레이크타임\\n20:30 라스트오더\\n금\\n▪︎\\t11:00 - 21:00\\n15:00 - 17:00 브레이크타임\\n20:30 라스트오더\\n1,3주/토요일휴무\\t11:00 - 21:00\\n15:00 - 17:00 브레이크타임\\n20:30 라스트오더'
      .replace(/\\n/g, '\n')
      .replace(/\\t/g, '\t');
  // console.log(inputText);
  return (
    <ul className="flex flex-col gap-4">
      {list.map((place) => (
        <Card
          idx={place.id}
          imageSrc={place.imageUrlList[0]}
          name={place.name}
          address={place.position.address}
          rating={place.score ?? 0}
          time={inputText}
          key={place.id}
        />
      ))}
    </ul>
  );
}
