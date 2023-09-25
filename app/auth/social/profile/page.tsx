'use client';

import AuthForm from '@/components/pages/auth/AuthForm';
import ProgressBar from '@/components/pages/auth/ProgressBar';
import Button from '@/components/ui/Button';
import SelectInput from '@/components/ui/Input/SelectInput';
import { invertedPetMaps, petMaps } from '@/constant/pets';
import useInput from '@/hooks/common/useInput';
import { useRegisterStore } from '@/hooks/stores/useRegisterStore';
import DefaultImg from '@/public/Auth/dog.svg';
import Pencil from '@/public/Auth/pencil.svg';
import createUserWithSocialLogin from '@/service/auth';
import { Species } from '@/types/types';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export default function page() {
  const step = useRegisterStore((state) => state.step);
  const setStep = useRegisterStore((state) => state.setStep);
  const nickname = useRegisterStore((state) => state.nickname);
  const petInfo = useRegisterStore((state) => state.petInfo);
  const setNickame = useRegisterStore((state) => state.setNickname);
  const setPetInfo = useRegisterStore((state) => state.setPetInfo);
  const position = useRegisterStore((state) => state.position);
  const checkList = useRegisterStore((state) => state.checkList);
  const imageFile = useRegisterStore((state) => state.imageFile);
  const setImageFile = useRegisterStore((state) => state.setImageFile);
  const { value: profileName, onChangeValue: setProfileName } =
    useInput(nickname);
  const { value: petName, onChangeValue: setPetName } = useInput(petInfo.name);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedPet, setSelectedPet] = useState(
    petInfo.species ? petMaps[petInfo.species] : '',
  );
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const key = searchParams.get('key');

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectPet = (pet: string) => {
    setSelectedPet(pet);
    // TODO: invertedPetMaps[pet]이 undefined일 경우 처리 (백과 협의 필요)
    setPetInfo({ ...petInfo, species: invertedPetMaps[pet] as Species });
    setIsOpen(false);
  };

  useEffect(() => {
    setStep(3);
  }, []);

  const handleNext = async () => {
    // TODO: 현재 뒤로가거나 완료를 누르면 저장이 안되는데, 이는 위치를 변화시킬 때마다 임시저장 하는 방식으로 해결해야함. 일일이 입력할 때마다 상태가 변하면 다른 컴포넌트에도 영향을 주어 성능 이슈가 발생할지도
    // setStep(step);
    if (!key) {
      console.error('key is not exist');
      return;
    }
    if (!imageFile) {
      console.error('imageFile is not exist');
      return;
    }
    if (!petInfo.species) {
      console.error('petInfo.species is not exist');
      return;
    }
    try {
      await createUserWithSocialLogin({
        image: imageFile,
        body: {
          key,
          termAgrees: checkList
            .map((check, idx) => (check ? idx + 1 : 0))
            .filter((v) => v !== 0),
          position: {
            latitude: position.lat,
            longitude: position.lng,
            name: position.name,
          },
          nickname: profileName,
          noImage: true,
          petInfos: [
            {
              petName: petName,
              petType: petInfo.species,
            },
          ],
        },
      });
      console.log('success');
      router.push('/');
    } catch (e) {
      console.error('fail');
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const file = e.target.files?.[0];
      // 파일 처리 로직을 추가하기
      if (file) {
        // file > File {name: 'ghost.gif', lastModified: 1695433165454, lastModifiedDate: Sat Sep 23 2023 10:39:25 GMT+0900 (한국 표준시), webkitRelativePath: '', size: 171707, …}
        // console.log('Selected file:', file);

        // 파일 처리 로직...

        // 예시: 파일을 미리보기하고 상태에 저장
        const reader = new FileReader();
        reader.onload = (e) => {
          // e.target?.result as string > data:image/gif;base64,R0lGODlhyADIAPf/AMh3Uq+TBLKzcg6bV6fTgwV7QQBN ...
          setUploadedImage(e.target?.result as string);
        };
        reader.readAsDataURL(file);
        console.log(file);
        setImageFile(file);
      }
    } catch (e) {
      setUploadedImage(null);
    }
  };

  const body = (
    <div className="flex flex-col items-center max-w-[400px] w-full gap-[20px]">
      <div className="flex flex-col items-center w-full">
        <h1 className="header1">프로필을 설정해주세요</h1>
        <ProgressBar step={step} />
      </div>
      <div className="flex flex-col items-center w-full gap-[12px]">
        {/* default profile */}
        <div className="rounded-full border border-grey-200 w-[100px] h-[100px] bg-white relative">
          <div className="rounded-full w-[94px] h-[94px] bg-grey-200 relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {uploadedImage ? (
              <img
                src={uploadedImage}
                alt="Uploaded Profile"
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              /* 기본 프로필 이미지 */
              <DefaultImg className="fill-grey-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            )}
            <button
              onClick={handleButtonClick}
              className="cursor-pointer rounded-full border border-grey-200 w-[38px] h-[38px] bg-white absolute bottom-0 right-0"
            >
              <Pencil className="fill-grey-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </button>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
          </div>
        </div>
        {/* required to refactor input */}
        <div className="w-full">
          <input
            type="text"
            className="px-5 py-4 rounded-[10px] w-full focus-primary body1 placeholder-grey-400"
            placeholder="프로필 닉네임을 설정해주세요."
            value={profileName}
            onChange={(e) => {
              if (e.target.value.length <= 10) {
                setNickame(e.target.value);
                setProfileName(e);
              }
            }}
          />
          <p className="text-grey-500 text-end">
            <span>{profileName.length}</span>{' '}
            <span className="text-grey-200">/</span> 10
          </p>
        </div>
        <div className="w-full flex flex-col gap-[8px]">
          <p className="body1 text-grey-800">나의 반려동물</p>
          <div className="flex flex-col w-full gap-3 tablet:flex-row">
            <input
              type="text"
              className="px-5 py-4 rounded-[10px] focus-primary body1 placeholder-grey-400 w-full"
              placeholder="반려동물 이름"
              value={petName}
              onChange={(e) => {
                if (e.target.value.length <= 10) {
                  setPetInfo({ ...petInfo, name: e.target.value });
                  setPetName(e);
                }
              }}
            />
            <SelectInput
              placeholder="반려동물 선택"
              isOpen={isOpen}
              list={Object.values(petMaps)}
              selected={selectedPet}
              handleClick={handleToggleDropdown}
              handleSelect={handleSelectPet}
            />
          </div>
        </div>
      </div>
      <p className="body4 text-grey-500">
        마이페이지에서 반려동물을 추가로 설정하실 수 있습니다.
      </p>
    </div>
  );
  const footer = (
    <div className="flex flex-col items-center gap-10 w-full">
      <Button
        className="text-lg flex-1 px-[20px] py-[16px]"
        fullWidth
        disabled={false}
        variant="primary"
        onClickAction={handleNext}
        // to="/auth/social/complete"
      >
        완료
      </Button>
    </div>
  );

  return (
    <AuthForm>
      {body}
      {footer}
    </AuthForm>
  );
}
