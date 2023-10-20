'use client';

import BottomButton from '@/components/pages/auth/BottomButton';
import ProgressBar from '@/components/pages/auth/ProgressBar';
import { SelectInput } from '@/components/ui/ui';
import { SPECIES } from '@/constant/pets';
import useInput from '@/hooks/common/useInput';
import { useGeneralRegisterStore } from '@/hooks/stores/useGeneralRegisterStore';
import { useIdentityStore } from '@/hooks/stores/useIdentityStore';
import DefaultImg from '@/public/Auth/dog.svg';
import Pencil from '@/public/Auth/pencil.svg';
import LoadingIcon from '@/public/loading.svg';
import Cancel from '@/public/X.svg';
import {
  createUserWithEmailAndPassword,
  createUserWithSocialLogin,
  loginWithEmailAndPassword,
} from '@/service/auth';
import { Species } from '@/types/types';
import Toast from '@/utils/notification';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useRef, useState } from 'react';
import { shallow } from 'zustand/shallow';

export default function Profile({ title }: { title: string }) {
  const {
    nickname,
    petInfo,
    setNickname,
    setPetInfo,
    position,
    checkList,
    imageFile,
    setImageFile,
    email,
    password,
  } = useGeneralRegisterStore(
    (state) => ({
      nickname: state.nickname,
      petInfo: state.petInfo,
      setNickname: state.setNickname,
      setPetInfo: state.setPetInfo,
      position: state.position,
      checkList: state.checkList,
      imageFile: state.imageFile,
      setImageFile: state.setImageFile,
      email: state.email,
      password: state.password,
    }),
    shallow,
  );
  const { phoneNumber } = useIdentityStore(
    (state) => ({ phoneNumber: state.phoneNum }),
    shallow,
  );
  const [profileName, setProfileName] = useInput(nickname);
  const [petName, setPetName] = useInput(petInfo.name);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPet, setSelectedPet] = useState(petInfo.species);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const key = searchParams.get('key');
  const step = searchParams.get('step');

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectPet = (pet: Species) => {
    setSelectedPet(pet);
    // TODO: invertedPetMaps[pet]이 undefined일 경우 처리 (백과 협의 필요)
    setPetInfo({ ...petInfo, species: pet });
    setIsOpen(false);
  };

  const handleNext = async () => {
    // TODO: 현재 뒤로가거나 완료를 누르면 저장이 안되는데, 이는 위치를 변화시킬 때마다 임시저장 하는 방식으로 해결해야함. 일일이 입력할 때마다 상태가 변하면 다른 컴포넌트에도 영향을 주어 성능 이슈가 발생할지도
    // TODO: 에러 내용 UI상 표시
    // if (!imageFile) {
    //   console.error('imageFile is not exist');
    //   return;
    // }
    if (!petInfo.species) {
      console.error('petInfo.species is not exist');
      return;
    }
    try {
      setIsLoading(true);
      if (key) {
        await createUserWithSocialLogin({
          image: imageFile ?? '',
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
            noImage: false,
            petInfos: [
              {
                petName,
                petType: petInfo.species,
              },
            ],
            briefIntroduction: `${petInfo.name}(${petInfo.species})`,
          },
        });
      } else {
        await createUserWithEmailAndPassword({
          image: imageFile ?? '',
          body: {
            email,
            password,
            termAgrees: checkList
              .map((check, idx) => (check ? idx + 1 : 0))
              .filter((v) => v !== 0),
            position: {
              latitude: position.lat,
              longitude: position.lng,
              name: position.name,
            },
            phoneNumber,
            nickname: profileName,
            petInfos: [
              {
                petName,
                petType: petInfo.species,
              },
            ],
            briefIntroduction: `${petInfo.name}(${petInfo.species})`,
          },
        });
        // for getting token
        await loginWithEmailAndPassword({
          email,
          password,
        });
      }
      setIsLoading(false);
      router.push(`/auth/complete`);
    } catch (e) {
      if (e instanceof Error) {
        Toast.error(e.message);
      }
    }
  };

  const handleImageUploadButtonClick = () => {
    // 클릭 시 파일 입력 필드 초기화
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    fileInputRef.current?.click();
  };
  // TODO: 기본이미지 선택시, 기본이미지로 설정되도록 수정
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const file = e.target.files?.[0];
      // 파일 처리 로직
      if (file) {
        // 파일을 미리보기하고 상태에 저장 (파일 처리 로직)
        const reader = new FileReader();
        reader.onload = (event) => {
          setUploadedImage(event.target?.result as string);
        };
        reader.readAsDataURL(file);
        setImageFile(file);
      }
    } catch (error) {
      setUploadedImage(null);
    }
  };
  const CancelImageSelect = () => {
    setUploadedImage(null);
    setImageFile(null);
  };

  const buttonChild = isLoading ? (
    <div className="flex items-center justify-center h-auto">
      <LoadingIcon className="w-7 h-7 animate-spin" />
    </div>
  ) : (
    '완료'
  );

  return (
    <>
      <div className="flex flex-col items-center max-w-[400px] w-full gap-[20px] mb-[98px]">
        <div className="flex flex-col items-center w-full">
          <h1 className="header1">{title}</h1>
          <ProgressBar step={parseInt(step ?? '3', 10)} limit={key ? 3 : 5} />
        </div>
        <div className="flex flex-col items-center w-full gap-[12px]">
          <div className="rounded-full border border-grey-200 w-[100px] h-[100px] bg-white relative">
            <div className="rounded-full w-[94px] h-[94px] bg-grey-200 relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {uploadedImage ? (
                <>
                  <Image
                    src={uploadedImage}
                    alt="Uploaded Profile"
                    className="w-full h-full object-cover rounded-full"
                    fill
                    sizes="100vw"
                  />
                  <button
                    type="button"
                    onClick={CancelImageSelect}
                    className="absolute top-0 right-0"
                  >
                    <Cancel className="w-4 h-4 fill-grey-400" />
                  </button>
                </>
              ) : (
                <DefaultImg className="fill-grey-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              )}
              <button
                type="button"
                onClick={handleImageUploadButtonClick}
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
          <div className="w-full">
            <input
              type="text"
              className="px-5 py-4 rounded-[10px] w-full focus-primary text-xs 2xs:text-sm sm:body1 placeholder-grey-400"
              placeholder="프로필 닉네임을 설정해주세요."
              value={profileName}
              onChange={(e) => {
                if (e.target.value.length <= 10) {
                  setNickname(e.target.value);
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
                className="px-5 py-4 rounded-[10px] focus-primary text-xs 2xs:text-sm sm:body1 placeholder-grey-400 w-full"
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
                list={SPECIES}
                selected={selectedPet}
                handleClick={handleToggleDropdown}
                handleSelect={handleSelectPet}
              />
            </div>
          </div>
        </div>
        <p className="text-xs 2xs:text-sm sm:body4 break-keep text-center text-grey-500">
          마이페이지에서 반려동물을 추가로 설정하실 수 있습니다.
        </p>
      </div>
      <BottomButton
        text={buttonChild}
        isFullWidth
        variant="primary"
        isDisabled={!profileName || !petName || !selectedPet}
        handleClick={handleNext}
      />
    </>
  );
}
