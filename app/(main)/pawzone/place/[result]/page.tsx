import React from 'react';
import PlaceScreen from '../../_components/Place';

interface Props {
  params: { result: string };
}

// id로 이에 대한 데이터를 활용하기
export default function page({ params: { result } }: Props) {
  return (
    <div className="w-[460px] h-full bg-white shadow-searchTab absolute top-0 left-0 z-[1]">
      <div className="pb-4 h-full overflow-y-scroll">
        <PlaceScreen imageSrc="https://ldb-phinf.pstatic.net/20230912_108/16945174495700yKn7_JPEG/IMG_2586.jpeg" />
      </div>
    </div>
  );
}
