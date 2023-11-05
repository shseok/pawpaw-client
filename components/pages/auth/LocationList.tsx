import React, { useEffect, useState } from 'react';
import { useGeneralRegisterStore } from '@/hooks/stores/useGeneralRegisterStore';
import { LocationInfoType } from '@/types/types';
import { getLocationList } from '@/service/map';
import CheckList from './CheckList';

interface Props {
  value: string;
}

// TODO: add loading spinner
export default function LocationList({ value }: Props) {
  const [locationInfo, setLocationInfo] = useState<LocationInfoType | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const position = useGeneralRegisterStore((state) => state.position);
  const setPosition = useGeneralRegisterStore((state) => state.setPosition);

  useEffect(() => {
    const fetchLocationList = async () => {
      setIsLoading(true);
      try {
        const locationList = await getLocationList(value);
        setLocationInfo(locationList);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchLocationList();
  }, [value]);

  const handleClick = (location: string) => {
    const { lat, lng } = locationInfo?.location ?? { lat: 0, lng: 0 };
    setPosition({ lat, lng, address: location });
  };

  const renderLocationList = () => {
    if (!locationInfo) return null;
    const isEmpty =
      Object.keys(locationInfo).length === 0 ||
      locationInfo?.predictions.length === 0;
    if (isEmpty) {
      return <h4 className="header4">{`'검색 결과가 없습니다.'`}</h4>;
    }

    return (
      <ul className="flex flex-col gap-[16px] overflow-scroll overflow-x-hidden max-h-[187px]">
        {locationInfo?.predictions.map((location, idx) => (
          <li className="body1" key={location}>
            <CheckList
              option={idx}
              text={location}
              isChecked={location === position.address}
              isShow={location === position.address}
              setCheck={() => handleClick(location)}
              className="gap-[4px]"
            />
          </li>
        ))}
      </ul>
    );
  };
  return (
    <div className="w-full min-h-[212px]">
      <h4 className="header4 mb-[26px]">{`'${value}' 검색 결과`}</h4>
      {isLoading ? <h4>정보를 불러오는 중...</h4> : renderLocationList()}
    </div>
  );
}
