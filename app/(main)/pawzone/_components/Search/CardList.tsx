import { Place } from '@/types/types';
import { getPlaceTimeString } from '@/utils/getPlaceTimeText';
import Card from './Card';

interface Props {
  list: Place[];
}

export default function CardList({ list }: Props) {
  return (
    <ul className="flex flex-col gap-4">
      {list.map((place) => {
        const {
          id,
          imageUrlList,
          name,
          position: { address },
          score,
          monOpen,
          monClose,
          monLastOrder,
          tueOpen,
          tueClose,
          tueLastOrder,
          wedOpen,
          wedClose,
          wedLastOrder,
          thuOpen,
          thuClose,
          thuLastOrder,
          friOpen,
          friClose,
          friLastOrder,
          satOpen,
          satClose,
          satLastOrder,
          sunOpen,
          sunClose,
          sunLastOrder,
        } = place;
        const timeString = getPlaceTimeString({
          mon: { open: monOpen, close: monClose, lastOrder: monLastOrder },
          tue: { open: tueOpen, close: tueClose, lastOrder: tueLastOrder },
          wed: { open: wedOpen, close: wedClose, lastOrder: wedLastOrder },
          thu: { open: thuOpen, close: thuClose, lastOrder: thuLastOrder },
          fri: { open: friOpen, close: friClose, lastOrder: friLastOrder },
          sat: { open: satOpen, close: satClose, lastOrder: satLastOrder },
          sun: { open: sunOpen, close: sunClose, lastOrder: sunLastOrder },
        });
        return (
          <Card
            idx={id}
            imageSrc={imageUrlList[0]}
            name={name}
            address={address}
            rating={score}
            time={timeString}
            key={place.id}
          />
        );
      })}
    </ul>
  );
}
