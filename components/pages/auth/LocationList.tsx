import React, { useEffect, useState } from 'react';
import CheckList from './CheckList';
import { useRegisterStore } from '@/hooks/stores/useRegisterStore';

interface Props {
  value: string;
}

type ResponseType = {
  predictions: string[];
  location: {
    lat: number;
    lng: number;
  };
};

// TODO: add loading spinner
export default function LocationList({ value }: Props) {
  const [locationInfo, setLocationInfo] = useState<ResponseType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const position = useRegisterStore((state) => state.position);
  const setPosition = useRegisterStore((state) => state.setPosition);

  useEffect(() => {
    async function getLocationList() {
      const response = await fetch(
        `http://localhost:3000/api/autocomplete?searchResult=${value}`,
      );
      const data = (await response.json()) as ResponseType;
      setLocationInfo(data);
      setIsLoading(true);
    }
    getLocationList();
  }, [value]);

  const handleClick = (location: string) => {
    const { lat, lng } = locationInfo?.location ?? { lat: 0, lng: 0 };
    setPosition({ lat, lng, name: location });
  };

  const renderLocationList = () => {
    if (!locationInfo) return;
    const isEmpty =
      Object.keys(locationInfo).length === 0 ||
      locationInfo?.predictions.length === 0;
    if (isEmpty) {
      return '검색 결과가 없습니다.';
    }

    return (
      <ul className="flex flex-col gap-[16px] overflow-scroll overflow-x-hidden max-h-[187px]">
        {locationInfo?.predictions.map((location, index) => (
          <li className="body1" key={index}>
            <CheckList
              text={location}
              isChecked={location === position.name}
              isShow={location === position.name}
              setCheck={() => handleClick(location)}
              className="gap-[4px]"
            ></CheckList>
          </li>
        ))}
      </ul>
    );
  };
  return (
    <div className="w-full">
      <h4 className="header4 mb-[26px]">{`'${value}' 검색 결과`}</h4>
      {isLoading ? renderLocationList() : null}
    </div>
  );
}
