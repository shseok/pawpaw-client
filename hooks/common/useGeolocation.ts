import { useState, useEffect } from 'react';

interface locationType {
  loaded: boolean;
  coordinates?: { lat: number; lng: number };
  error?: { code: number; message: string };
}

interface Location {
  coords: Coordinates;
}

type Coordinates = {
  latitude: number;
  longitude: number;
};

const useGeolocation = () => {
  const [location, setLocation] = useState<locationType>({
    loaded: false,
    coordinates: { lat: 0, lng: 0 },
  });
  const [isOpen, setIsOpen] = useState(false);

  const onSuccess = (location: Location) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    });
  };

  const onError = (error: { code: number; message: string }) => {
    setLocation({
      loaded: true,
      error,
    });
    showModal();
  };

  // 커스텀 모달 표시
  function showModal() {
    setIsOpen(true);
  }

  // 위치 권한 요청 함수
  function requestLocationPermission() {
    return new Promise((resolve, reject) => {
      navigator.permissions
        .query({ name: 'geolocation' })
        .then((result) => {
          if (result.state === 'granted') {
            resolve(null);
          } else if (result.state === 'prompt') {
            showModal();

            result.onchange = () => {
              if (result.state === 'granted') {
                resolve(null);
              } else {
                reject(new Error('위치 권한이 거부되었습니다.'));
              }
            };
          } else {
            reject(new Error('위치 권한이 거부되었습니다.'));
          }
        })
        .catch((error) => reject(error))
        .finally(() => {
          navigator.geolocation.getCurrentPosition(onSuccess, onError);
        });
    });
  }

  async function getLocationData() {
    try {
      await requestLocationPermission(); // 위치 권한 요청
    } catch (error) {
      console.error('위치 정보를 가져오는데 실패했습니다.', error);
      showModal();
    }
  }

  useEffect(() => {
    // navigator 객체 안에 geolocation이 없다면 위치 정보가 없는 것.
    if (!('geolocation' in navigator)) {
      onError({
        code: 0,
        message: 'Geolocation not supported',
      });
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return { location, isOpen, setIsOpen, getLocationData };
};

export default useGeolocation;
