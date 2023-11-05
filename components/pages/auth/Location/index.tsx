'use client';

import { shallow } from 'zustand/shallow';
import { useGeneralRegisterStore } from '@/hooks/stores/useGeneralRegisterStore';
import { useRouter, useSearchParams } from 'next/navigation';
import { useDebounce } from 'use-debounce';
import useGeolocation from '@/hooks/common/useGeolocation';
import useInput from '@/hooks/common/useInput';
import { useEffect } from 'react';
import { Button, SearchInput } from '@/components/ui/ui';
import { getLocationKoreanName } from '@/service/map';
import ConfirmLocationModal from '@/components/ui/Modal/ConfirmLocationModal';
import Detect from '@/public/svgs/Auth/detect.svg';
import ProgressBar from '../ProgressBar';
import LocationList from '../LocationList';
import BottomButton from '../BottomButton';

export default function Location({ title }: { title: string }) {
  const { position, setPosition, searchHistory, setSearchHistory } =
    useGeneralRegisterStore(
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
  const step = searchParams.get('step');

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
        address: locationName.koAddress,
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
          <ProgressBar step={parseInt(step ?? '2', 10)} limit={key ? 3 : 5} />
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
            <div className="flex items-center justify-center gap-1">
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
          const link = key
            ? `/auth/profile?key=${key}&step=3`
            : `/auth/profile?step=${parseInt(step ?? '2', 10) + 1}`;
          router.push(link);
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
