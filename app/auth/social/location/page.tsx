'use client';

import ProgressBar from '@/components/pages/auth/ProgressBar';
import Button from '@/components/ui/Button';
import { useRegisterStore } from '@/hooks/stores/useRegisterStore';
import { useEffect } from 'react';
import Detect from '@/public/Auth/detect.svg';
import useGeolocation from '@/hooks/common/useGeolocation';
import SearchInput from '@/components/ui/Input/SearchInput';
import useInput from '@/hooks/common/useInput';
import LocationList from '@/components/pages/auth/LocationList';
import { useDebounce } from 'use-debounce';
import { useRouter, useSearchParams } from 'next/navigation';
import { Modal } from '@/components/ui/ui';
import { getLocationKoreanName } from '@/service/map';

const STEP = 2;

export default function Location() {
  const position = useRegisterStore((state) => state.position);
  const setPosition = useRegisterStore((state) => state.setPosition);
  const searchHistory = useRegisterStore((state) => state.searchHistory);
  const setSearchHistory = useRegisterStore((state) => state.setSearchHistory);
  const { location, isOpen, setIsOpen, getLocationData } = useGeolocation();

  const router = useRouter();
  const searchParams = useSearchParams();
  const key = searchParams.get('key');

  const [searchResult, onChangeValue, resetValue, setValueByInput] =
    useInput(searchHistory);
  const [inputResult] = useDebounce(searchResult, 500);

  useEffect(() => {
    setSearchHistory(inputResult);
  }, [setSearchHistory, inputResult]);

  return (
    <>
      <div className="flex flex-col items-center max-w-[400px] w-full gap-[32px]">
        <div className="flex flex-col items-center w-full">
          <h1 className="header1">위치를 설정해주세요</h1>
          <ProgressBar step={STEP} />
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
            className="text-lg flex-1 px-[20px] py-[16px]"
            fullWidth
            onClickAction={async () => {
              const latitude = location?.coordinates?.lat ?? 0;
              const longitude = location?.coordinates?.lng ?? 0;
              await getLocationData();
              const locationName = await getLocationKoreanName(
                latitude,
                longitude,
              );
              setPosition({
                lat: latitude,
                lng: longitude,
                name: locationName.koAddress,
              });
              setValueByInput(locationName.koAddress);
              setSearchHistory(locationName.koAddress);
            }}
          >
            <div className="flex justify-center items-center gap-1">
              <Detect className="fill-grey-800" />
              현재 위치로 설정
            </div>
          </Button>
          {inputResult && <LocationList value={inputResult} />}
        </div>

        {isOpen && (
          <Modal
            open={isOpen}
            onClose={() => {
              setIsOpen(false);
            }}
          >
            <div className="flex flex-col justify-center bg-white p-[18px] gap-[28px] w-[376px] rounded-[10px]">
              <div className="flex flex-col justify-center gap-[20px] px-[33px] pt-[22px]">
                <p className="header4 ">
                  위치정보 이용 권한 설정이 필요합니다.
                </p>
                <span>
                  내 주변 동네를 설정하려면 사용 중인 브라우저의 위치 권한을
                  허용해주세요.
                </span>
              </div>
              <Button
                fullWidth
                variant="ghost"
                onClickAction={() => setIsOpen(false)}
              >
                닫기
              </Button>
            </div>
          </Modal>
        )}
      </div>
      <div className="flex flex-col items-center gap-10 w-full">
        <Button
          className="text-lg flex-1 px-[20px] py-[16px]"
          fullWidth
          disabled={!position.lat}
          variant="primary"
          onClickAction={() => {
            router.push(`/auth/social/profile?key=${key}`);
          }}
        >
          다음
        </Button>
      </div>
    </>
  );
}
