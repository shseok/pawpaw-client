'use client';

import { shallow } from 'zustand/shallow';
import { useRegisterStore } from '@/hooks/stores/useRegisterStore';
import { useRouter, useSearchParams } from 'next/navigation';
import { useDebounce } from 'use-debounce';
import useGeolocation from '@/hooks/common/useGeolocation';
import useInput from '@/hooks/common/useInput';
import { useEffect } from 'react';
import { Button, SearchInput } from '@/components/ui/ui';
import { getLocationKoreanName } from '@/service/map';
import Detect from '@/public/Auth/detect.svg';
import ConfirmLocationModal from '@/components/ui/Modal/ConfirmLocationModal';
import ProgressBar from '../ProgressBar';
import LocationList from '../LocationList';
import BottomButton from '../BottomButton';

export default function Location({
  step,
  title,
}: {
  step: number;
  title: string;
}) {
  const { position, setPosition, searchHistory, setSearchHistory } =
    useRegisterStore(
      (state) => ({
        position: state.position,
        setPosition: state.setPosition,
        searchHistory: state.searchHistory,
        setSearchHistory: state.setSearchHistory,
      }),
      shallow,
    );
  const { location, isOpen, setIsOpen, getLocationData } = useGeolocation();

  const router = useRouter();
  const searchParams = useSearchParams();
  const key = searchParams.get('key');

  const [searchResult, onChangeValue, resetValue, setValueByInput] =
    useInput(searchHistory);
  const [inputResult] = useDebounce(searchResult, 500);

  const handleCurrentLocationClick = async () => {
    const latitude = location?.coordinates?.lat ?? 0;
    const longitude = location?.coordinates?.lng ?? 0;
    await getLocationData();
    try {
      const locationName = await getLocationKoreanName(latitude, longitude);
      setPosition({
        lat: latitude,
        lng: longitude,
        name: locationName.koAddress,
      });
      setValueByInput(locationName.koAddress);
      setSearchHistory(locationName.koAddress);
    } catch (error) {
      // setIsOpen(true);
    }
  };

  useEffect(() => {
    setSearchHistory(inputResult);
  }, [setSearchHistory, inputResult]);

  const marginBottom = !inputResult ? 'mb-[301px]' : 'mb-[45px]';
  return (
    <>
      <div
        className={`flex flex-col items-center max-w-[400px] w-full gap-[32px] ${marginBottom}`}
      >
        <div className="flex flex-col items-center w-full">
          <h1 className="header1">{title}</h1>
          <ProgressBar step={step} />
        </div>
        <div className="flex flex-col items-center w-full gap-[21px]">
          <SearchInput
            placeholder="동명 (읍,면)으로 검색 (ex.서초동)"
            value={searchResult}
            onChangeValue={onChangeValue}
            resetValue={resetValue}
            className="focus-primary placeholder-grey-400"
          />
          <Button
            variant="light"
            className="body2 flex-1 px-[20px] py-[16px]"
            fullWidth
            onClickAction={handleCurrentLocationClick}
          >
            <div className="flex justify-center items-center gap-1">
              <Detect className="fill-grey-800" />
              현재 위치로 설정
            </div>
          </Button>
          {inputResult && <LocationList value={inputResult} />}
        </div>
      </div>
      <BottomButton
        text="다음"
        isFullWidth
        variant="primary"
        isDisabled={!position.lat}
        handleClick={() => {
          router.push(`/auth/profile?key=${key}`);
        }}
      />
      <ConfirmLocationModal
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      />
    </>
  );
}
